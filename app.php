<?php
global $url;
switch ($url) {
    case "login":
        $users->login($_POST);
        break;
    case "addUser":
        $users->add($_POST);
        break;
    case "updateUser":
        $users->edit($_POST);
        break;
    case "users":
        $users->view_all();
        break;
    case "viewUser":
        $id = $main->select("id");
        $users->view($id);
        break;
    case "deleteUser":
        $id = $main->select("id");
        $users->delete($id);
        break;
    case "addTask":
        $task->add($_POST);
        break;
    case "editTask":
        $task->edit($_POST);
        break;
    case "tasks":
        $task->view_all();
        break;
    case "viewTask":
        $id = $main->select("id");
        $task->view($id);
        break;
    case "deleteTask":
        $id = $main->select("id");
        $task->delete($id);
        break;
    case "ntwc":
        $main->ntwc();
        break;
    case "sendAlert":
        $main->send($_POST);
        break;
    case "showAlert":
        $id = $main->select("id");
        $main->sendAlert($id);
        break;
    case "alerts":
        $main->alerts();
        break;
    default:
        $core->response("Something went wrong");
}
unset($url);