<?php


namespace app;


class Blog
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
        $title = $this->db->real_scape_str($data['title']);
        $path = $this->core->slug($title);
        $description = $this->db->real_scape_str($data['description']);
        $content = $this->db->real_scape_str($data['content']);
        $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : "";
        $link = $this->db->real_scape_str($data['link']);
        if (empty($title) || empty($path) || empty($description) || empty($content) || empty($image) || empty($link)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `blog`(`title`, `path`, `description`, `content`, `image`, `link`) VALUES ('$title','$path','$description','$content','$image','$link')", "blog");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $title = $this->db->real_scape_str($data['title']);
        $description = $this->db->real_scape_str($data['description']);
        $content = $this->db->real_scape_str($data['content']);
        $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : "";
        $link = $this->db->real_scape_str($data['link']);
        if (empty($title) || empty($description) || empty($content) || empty($image) || empty($link)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id from blog where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `blog` SET `title`='$title',`description`='$description',`content`='$content',`image`='$image',`link`='$link' WHERE id='$id'", "blog", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function delete($path)
    {
        $checking = $this->db->num_rows("select id from blog where path='$path'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `blog` WHERE path='$path'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($path)
    {
        $data = $this->db->fetchArray("SELECT * FROM `blog` WHERE path='$path'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `blog` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}