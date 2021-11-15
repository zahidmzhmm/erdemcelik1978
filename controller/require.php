<?php

use app\Core;
use app\Database;
use app\Users;
use app\Main;
use app\Task;

$req = $_REQUEST;
$post = $_POST;
$get = $_GET;
require_once APP_ROOT . "controller/Core.php";
require_once APP_ROOT . "controller/Database.php";
require_once APP_ROOT . "vendor/phpmailer/PHPMailerAutoload.php";
require_once APP_ROOT . "classes/Users.php";
require_once APP_ROOT . "classes/Main.php";
require_once APP_ROOT . "classes/Task.php";
require_once APP_ROOT . "classes/Mailer.php";
$core = new Core();
$database = new Database();
$users = new Users();
$main = new Main();
$task = new Task();

######### Bottom Required #################
require_once APP_ROOT . "app.php";