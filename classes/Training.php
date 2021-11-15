<?php


namespace app;


class Training
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
        $title = $data['title'];
        $path = $this->core->slug($title);
        $content = $this->db->real_scape_str($data['content']);
        $banner = !empty($_FILES['banner']['name']) ? $this->core->file_upload("banner") : "";
        if (empty($path) || empty($title) || empty($content) || empty($banner)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `training`(`title`, `path`, `content`, `banner`) VALUES ('$title','$path','$content','$banner')", "training");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $title = $data['title'];
        $path = $this->core->slug($title);
        $content = $this->db->real_scape_str($data['content']);
        $banner = !empty($_FILES['banner']['name']) ? $this->core->file_upload("banner") : "";
        if (empty($title) || empty($content) || empty($banner)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id from training where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `training` SET `title`='$title',`content`='$content',`banner`='$banner' WHERE id='$id'", "training", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function delete($path)
    {
        $checking = $this->db->num_rows("select id from training where path='$path'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `training` WHERE path='$path'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($path)
    {
        $data = $this->db->fetchArray("SELECT * FROM `training` WHERE path='$path'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `training` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}