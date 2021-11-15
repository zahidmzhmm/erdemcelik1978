<?php


namespace app;


class Courses
{
    private $db;
    private $core;

    public function __construct()
    {
        $this->db = new Database();
        $this->core = new Core();
    }

    public function add($data)
    {
        $category = $data['category'];
        $parent = $data['parent'];
        $name = $this->db->real_scape_str($data['name']);
        $instructor = $this->db->real_scape_str($data['instructor']);
        $path = $this->core->slug($name);
        $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : "";
        $date = $data['date'];
        $banner = !empty($_FILES['banner']['name']) ? $this->core->file_upload("banner") : "";
        $duration = $data['duration'];
        $mode = $data['mode'];
        $demo = $data['demo'];
        $price = $data['price'];
        $overview = $this->db->real_scape_str($data['overview']);
        $description = $this->db->real_scape_str($data['description']);
        if (empty($path) || empty($instructor) || empty($category) || empty($parent) || empty($name) || empty($image) || empty($date) || empty($banner) || empty($duration) || empty($mode) || empty($demo) || empty($price) || empty($overview)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `courses`(`category`, `description`, `instructor`, `path`, `parent`, `name`, `image`, `date`, `banner`, `duration`, `mode`, `demo`, `price`, `overview`)
                                            VALUES ('$category','$description','$instructor','$path','$parent','$name','$image','$date','$banner','$duration','$mode','$demo','$price','$overview')", "courses");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $category = $data['category'];
        $parent = $data['parent'];
        $name = $this->db->real_scape_str($data['name']);
        $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : $data['image_old'];
        $date = $data['date'];
        $banner = !empty($_FILES['banner']['name']) ? $this->core->file_upload("banner") : $data['banner_old'];
        $duration = $data['duration'];
        $instructor = $this->db->real_scape_str($data['instructor']);
        $mode = $data['mode'];
        $demo = $data['demo'];
        $price = $data['price'];
        $overview = $this->db->real_scape_str($data['overview']);
        $description = $this->db->real_scape_str($data['description']);
        if (empty($id) || empty($category) || empty($parent) || empty($name) || empty($image) || empty($date) || empty($banner) || empty($duration) || empty($mode) || empty($demo) || empty($price) || empty($overview)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id from courses where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `courses` SET `category`='$category',`description`='$description',`instructor`='$instructor',`parent`='$parent',`name`='$name',`image`='$image',`date`='$date',`banner`='$banner',`duration`='$duration',`mode`='$mode',`demo`='$demo',`price`='$price',`overview`='$overview' WHERE id='$id'", "courses", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }


    public function delete($path)
    {
        $checking = $this->db->num_rows("select id from courses where path='$path'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `courses` WHERE path='$path'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($path)
    {
        $data = $this->db->fetchArray("SELECT * FROM `courses` WHERE path='$path'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT path,category.id as category_id,courses.id as course_id, category.name as category_name, description, parent, courses.name as courses_name, instructor, image, date, banner, duration, mode, demo,price, status, created_at
                                         FROM courses
                                         INNER JOIN category
                                         ON courses.category = category.id order by courses.id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

}