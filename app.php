<?php
global $url;
switch ($url) {
    case "login":
        $users->login($_POST);
        break;
    case "about":
        $about->view();
        break;
    case "blogs":
        $blog->view_all();
        break;
    case "categories":
        $category->view_all();
        break;
    case "courses":
        $courses->view_all();
        break;
    case "curriculums":
        $curriculum->view_all();
        break;
    case "reviews":
        $review->view_all();
        break;
    case "sliders":
        $slider->view_all();
        break;
    case "trainings":
        $training->view_all();
        break;
    case "users":
        $users->view_all();
        break;
    case "contactAll":
        $main->view_all_contact();
        break;
    case "enquiryAll":
        $main->view_all_enquiry();
        break;
    case "blog":
        $path = $main->select("path");
        $blog->view($path);
        break;
    case "category":
        $id = $main->select("id");
        $category->view($id);
        break;
    case "course":
        $path = $main->select("path");
        $courses->view($path);
        break;
    case "curriculum":
        $id = $main->select("id");
        $curriculum->view($id);
        break;
    case "slider":
        $id = $main->select("id");
        $slider->view($id);
        break;
    case "review":
        $id = $main->select("id");
        $review->view($id);
        break;
    case "training":
        $path = $main->select("path");
        $training->view($path);
        break;
    case "userView":
        $id = $main->select("id");
        $users->view($id);
        break;
    case "updateAbout":
        $about->update($_POST);
        break;
    case "updateBlog":
        $blog->edit($_POST);
        break;
    case "updateCategory":
        $category->edit($_POST);
        break;
    case "updateCourses":
        $courses->edit($_POST);
        break;
    case "updateCurriculum":
        $curriculum->edit($_POST);
        break;
    case "updateReview":
        $review->edit($_POST);
        break;
    case "updateSlider":
        $slider->edit($_POST);
        break;
    case "updateTraining":
        $training->edit($_POST);
        break;
    case "updateUser":
        $users->edit($_POST);
        break;
    case "addBlog":
        $blog->add($_POST);
        break;
    case "addCategory":
        $category->add($_POST);
        break;
    case "addCourses":
        $courses->add($_POST);
        break;
    case "addCurriculum":
        $curriculum->add($_POST);
        break;
    case "addReview":
        $review->add($_POST);
        break;
    case "addSlider":
        $slider->add($_POST);
        break;
    case "addTraining":
        $training->add($_POST);
        break;
    case "addUser":
        $users->add($_POST);
        break;
    case "addContact":
        $main->contact($_POST);
        break;
    case "addEnquiry":
        $main->enquiry($_POST);
        break;
    case "deleteBlog":
        $path = $main->select("path");
        $blog->delete($path);
        break;
    case "deleteCategory":
        $id = $main->select("id");
        $category->delete($id);
        break;
    case "deleteCourses":
        $path = $main->select("path");
        $courses->delete($path);
        break;
    case "deleteCurriculum":
        $id = $main->select("id");
        $curriculum->delete($id);
        break;
    case "deleteSlider":
        $id = $main->select("id");
        $slider->delete($id);
        break;
    case "deleteReview":
        $id = $main->select("id");
        $review->delete($id);
        break;
    case "deleteTraining":
        $path = $main->select("path");
        $training->delete($path);
        break;
    case "deleteUser":
        $id = $main->select("id");
        $users->delete($id);
        break;
    case "deleteContact":
        $id = $main->select("id");
        $main->delete_contact($id);
        break;
    case "deleteEnquiry":
        $id = $main->select("id");
        $main->delete_enquiry($id);
        break;
    default:
        $core->response("Something went wrong");
}
unset($url);