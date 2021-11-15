<?php


namespace app;


class Slider
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
        $description = $this->db->real_scape_str($data['description']);
        $link = $data['link'];
        $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : "";
        $order = !empty($data['order']) ? $data['order'] : "";
        if (empty($title) || empty($description) || empty($link) || empty($image)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `slider`(`title`,`description`,`link`,`image`,`order`) VALUES ('$title','$description','$link','$image','$order')", "slider");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $title = $this->db->real_scape_str($data['title']);
        $description = $this->db->real_scape_str($data['description']);
        $link = $data['link'];
        $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : "";
        $order = !empty($data['order']) ? $data['order'] : "";
        if (empty($id) || empty($title) || empty($description) || empty($link) || empty($image)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id from slider where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `slider` SET `title`='$title',`description`='$description',`link`='$link',`image`='$image',`order`='$order' WHERE id='$id'", "slider", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function delete($id)
    {
        $checking = $this->db->num_rows("select id from slider where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `slider` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($id)
    {
        $data = $this->db->fetchArray("SELECT * FROM `slider` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `slider` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}