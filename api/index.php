<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once "../config.php";
if (isset($_GET['url'])) {
    $url = $_GET['url'];
    global $url;
    require_once APP_ROOT . 'controller/require.php';
} else {
    echo json_encode(['message' => "Page Not Found", 'type' => "danger", 'status' => 400, 'data' => []]);
}