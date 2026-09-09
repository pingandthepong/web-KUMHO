<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode([
        'success' => false,
        'message' => '잘못된 요청입니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * 1. .env 불러오기
 */
$envPath = dirname(__DIR__) . '/.env';

if (!file_exists($envPath) || !is_readable($envPath)) {
    echo json_encode([
        'success' => false,
        'message' => '.env 파일을 찾을 수 없습니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$env = parse_ini_file($envPath);

$appKey = $env['KIWOOM_APP_KEY'] ?? '';
$secretKey = $env['KIWOOM_SECRET_KEY'] ?? '';

if (!$appKey || !$secretKey) {
    echo json_encode([
        'success' => false,
        'message' => 'Kiwoom API 인증 정보가 설정되지 않았습니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}


/**
 * 2. Kiwoom 접근 토큰 발급
 */
$tokenUrl = 'https://api.kiwoom.com/oauth2/token';

$tokenData = [
    'grant_type' => 'client_credentials',
    'appkey' => $appKey,
    'secretkey' => $secretKey
];

$ch = curl_init($tokenUrl);

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json;charset=UTF-8'
    ],
    CURLOPT_POSTFIELDS => json_encode($tokenData)
]);

$tokenResponse = curl_exec($ch);
$tokenHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($tokenResponse === false) {
    echo json_encode([
        'success' => false,
        'message' => 'Kiwoom 접근토큰 요청에 실패했습니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$tokenResult = json_decode($tokenResponse, true);

if (
    $tokenHttpCode !== 200 ||
    !isset($tokenResult['token']) ||
    ($tokenResult['return_code'] ?? -1) !== 0
) {
    echo json_encode([
        'success' => false,
        'message' => $tokenResult['return_msg'] ?? '접근토큰을 받지 못했습니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$accessToken = $tokenResult['token'];


/**
 * 3. 금호건설 주가 정보 조회
 * API ID: ka10001
 */
$stockUrl = 'https://api.kiwoom.com/api/dostk/stkinfo';

$stockData = [
    'stk_cd' => '002990'
];

$ch = curl_init($stockUrl);

curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json;charset=UTF-8',
        'authorization: Bearer ' . $accessToken,
        'api-id: ka10001'
    ],
    CURLOPT_POSTFIELDS => json_encode($stockData)
]);

$stockResponse = curl_exec($ch);
$stockHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if ($stockResponse === false) {
    echo json_encode([
        'success' => false,
        'message' => '주가 정보를 요청하지 못했습니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$stockResult = json_decode($stockResponse, true);


/**
 * 4. Kiwoom API 응답 확인
 */
if (
    $stockHttpCode !== 200 ||
    !is_array($stockResult) ||
    ($stockResult['return_code'] ?? -1) !== 0
) {
    echo json_encode([
        'success' => false,
        'message' => $stockResult['return_msg'] ?? '주가 조회에 실패했습니다.'
    ], JSON_UNESCAPED_UNICODE);
    exit;
}


/**
 * 5. 필요한 데이터만 추려서 반환
 */
echo json_encode([
    'success' => true,
    'stock' => [
        'code' => $stockResult['stk_cd'] ?? '002990',
        'name' => $stockResult['stk_nm'] ?? '금호건설',
        'price' => $stockResult['cur_prc'] ?? null,
        'change' => $stockResult['pred_pre'] ?? null,
        'changeRate' => $stockResult['flu_rt'] ?? null,
        'prevClose' => $stockResult['base_pric'] ?? null,
        'high' => $stockResult['high_pric'] ?? null,
        'low' => $stockResult['low_pric'] ?? null,
        'volume' => $stockResult['trde_qty'] ?? null
    ]
], JSON_UNESCAPED_UNICODE);