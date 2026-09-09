<?php

header('Content-Type: application/json; charset=utf-8');

/* -------------------------------------------------------------------------- */
/*                                 1. .env 읽기                               */
/* -------------------------------------------------------------------------- */

$envPath = dirname(__DIR__) . '/.env';

if (!file_exists($envPath)) {
    echo json_encode([
        'success' => false,
        'message' => '.env 파일을 찾을 수 없습니다.'
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

$env = parse_ini_file($envPath);

$appKey = $env['KIWOOM_APP_KEY'] ?? '';
$secretKey = $env['KIWOOM_APP_SECRET'] ?? '';

if (!$appKey || !$secretKey) {
    echo json_encode([
        'success' => false,
        'message' => '키움 API 인증정보가 없습니다.'
    ], JSON_UNESCAPED_UNICODE);

    exit;
}


/* -------------------------------------------------------------------------- */
/*                          2. 키움 접근토큰 요청                             */
/* -------------------------------------------------------------------------- */

$url = 'https://api.kiwoom.com/oauth2/token';

$data = [
  'grant_type' => 'client_credentials',
  'appkey' => $appKey,
  'secretkey' => $secretKey
];

$ch = curl_init($url);

curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json;charset=UTF-8'
  ],
  CURLOPT_POSTFIELDS => json_encode($data)
]);

$response = curl_exec($ch);

if ($response === false) {
  echo json_encode([
    'success' => false,
    'message' => '키움 API 요청에 실패했습니다.',
    'error' => curl_error($ch)
  ], JSON_UNESCAPED_UNICODE);

  exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);



/* -------------------------------------------------------------------------- */
/*                           3. 키움 응답 확인                                */
/* -------------------------------------------------------------------------- */

$result = json_decode($response, true);

if ($httpCode !== 200) {
  echo json_encode([
    'success' => false,
    'message' => '키움 API 인증에 실패했습니다.',
    'http_code' => $httpCode,
    'response' => $result
  ], JSON_UNESCAPED_UNICODE);

  exit;
}

/* -------------------------------------------------------------------------- */
/*                    4. 금호건설 주식 정보 조회                              */
/* -------------------------------------------------------------------------- */

$accessToken = $result['token'] ?? '';

if (!$accessToken) {
  echo json_encode([
    'success' => false,
    'message' => '접근토큰을 받지 못했습니다.'
  ], JSON_UNESCAPED_UNICODE);

  exit;
}

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

if ($stockResponse === false) {
  echo json_encode([
    'success' => false,
    'message' => '주가 조회 API 요청에 실패했습니다.',
    'error' => curl_error($ch)
  ], JSON_UNESCAPED_UNICODE);

  exit;
}

$stockHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

$stockResult = json_decode($stockResponse, true);

/* -------------------------------------------------------------------------- */
/*                         5. 키움 API 응답 확인                              */
/* -------------------------------------------------------------------------- */

if ($stockHttpCode !== 200) {
    echo json_encode([
        'success' => false,
        'message' => '주가 조회에 실패했습니다.',
        'http_code' => $stockHttpCode,
        'response' => $stockResult
    ], JSON_UNESCAPED_UNICODE);

    exit;
}

if (isset($stockResult['return_code']) && $stockResult['return_code'] != 0) {
    echo json_encode([
        'success' => false,
        'message' => '키움 주가 조회 API 오류',
        'return_code' => $stockResult['return_code'],
        'return_msg' => $stockResult['return_msg'] ?? ''
    ], JSON_UNESCAPED_UNICODE);

    exit;
}


/* -------------------------------------------------------------------------- */
/*                    6. 필요한 데이터만 JSON으로 반환                        */
/* -------------------------------------------------------------------------- */

echo json_encode([
    'success' => true,
    'stock' => [
        'code' => $stockResult['stk_cd'] ?? '002990',
        'name' => $stockResult['stk_nm'] ?? '금호건설',

        // 현재가
        'price' => $stockResult['cur_prc'] ?? null,

        // 전일대비
        'change' => $stockResult['pred_pre'] ?? null,

        // 등락률
        'changeRate' => $stockResult['flu_rt'] ?? null,

        // 전날 종가
        'prevClose' => $stockResult['base_pric'] ?? null,

        // 고가
        'high' => $stockResult['high_pric'] ?? null,

        // 저가
        'low' => $stockResult['low_pric'] ?? null,

        // 거래량
        'volume' => $stockResult['trde_qty'] ?? null
    ]
], JSON_UNESCAPED_UNICODE);