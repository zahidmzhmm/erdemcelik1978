<?php


namespace app;


class Category
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
        $name = $data['name'];
        $icon = !empty($_FILES['icon']['name']) ? $this->core->file_upload("icon") : "";
        if (empty($name)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `category`(`name`, `icon`) VALUES ('$name','$icon')", "category");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $name = $data['name'];
        $icon = !empty($_FILES['icon']['name']) ? $this->core->file_upload("icon") : "";
        if (empty($name) || empty($id)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id,icon from category where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `category` SET `name`='$name', `icon`='$icon' WHERE id='$id'", "category", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function delete($id)
    {
        $checking = $this->db->num_rows("select id from category where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `category` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($id)
    {
        $data = $this->db->fetchArray("SELECT * FROM `category` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `category` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}