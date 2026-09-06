<?php
/**
 * PHP built-in server router.
 * Run from this directory:
 *   php -S localhost:8000 router.php
 *
 * .html is treated as PHP so <?php include ?> works.
 * Static files (css/js/images) fall through to the built-in server.
 */

$uriPath = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
if (!is_string($uriPath)) {
    return false;
}

$uriPath = urldecode($uriPath);
if ($uriPath === '' || $uriPath === '/') {
    $uriPath = '/index.html';
}

$root = realpath(__DIR__);
if ($root === false) {
    return false;
}

$candidate = $root . $uriPath;
$realFile = realpath($candidate);

if ($realFile === false || !is_file($realFile)) {
    return false;
}

$rootPrefix = $root . DIRECTORY_SEPARATOR;
if ($realFile !== $root && !str_starts_with($realFile, $rootPrefix)) {
    http_response_code(403);
    exit;
}

$ext = strtolower(pathinfo($realFile, PATHINFO_EXTENSION));
if ($ext !== 'html') {
    return false;
}

chdir(dirname($realFile));
include $realFile;
exit;
