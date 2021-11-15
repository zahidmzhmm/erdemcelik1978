<?php

use app\Core;
use app\Database;
use app\Users;
use app\About;
use app\Blog;
use app\Category;
use app\Curriculum;
use app\Slider;
use app\Training;
use app\Courses;
use app\Main;
use app\Review;

$req = $_REQUEST;
$post = $_POST;
$get = $_GET;
require_once APP_ROOT . "controller/Core.php";
require_once APP_ROOT . "controller/Database.php";
require_once APP_ROOT . "classes/Users.php";
require_once APP_ROOT . "classes/About.php";
require_once APP_ROOT . "classes/Blog.php";
require_once APP_ROOT . "classes/Category.php";
require_once APP_ROOT . "classes/Curriculum.php";
require_once APP_ROOT . "classes/Slider.php";
require_once APP_ROOT . "classes/Training.php";
require_once APP_ROOT . "classes/Courses.php";
require_once APP_ROOT . "classes/Main.php";
require_once APP_ROOT . "classes/Review.php";
$core = new Core();
$database = new Database();
$users = new Users();
$about = new About();
$blog = new Blog();
$category = new Category();
$curriculum = new Curriculum();
$slider = new Slider();
$training = new Training();
$courses = new Courses();
$main = new Main();
$review = new Review();

######### Bottom Required #################
require_once APP_ROOT . "app.php";