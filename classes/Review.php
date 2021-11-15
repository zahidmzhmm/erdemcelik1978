<?php


namespace app;


class Review
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
        $name = $this->db->real_scape_str($data['name']);
        $date = $data['date'];
        $title = $this->db->real_scape_str($data['title']);
        $review = $data['review'];
        $description = $this->db->real_scape_str($data['description']);
        if (empty($name) || empty($date) || empty($title) || empty($review) || empty($description)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `review`(`name`, `date`, `title`, `review`, `description`) VALUES ('$name','$date','$title','$review','$description')", "review");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $name = $this->db->real_scape_str($data['name']);
        $date = $data['date'];
        $title = $this->db->real_scape_str($data['title']);
        $review = $data['review'];
        $description = $this->db->real_scape_str($data['description']);
        if (empty($id) || empty($name) || empty($date) || empty($title) || empty($review) || empty($description)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id from review where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `review` SET `name`='$name',`date`='$date',`title`='$title',`review`='$review',`description`='$description' WHERE id='$id'", "review", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function delete($id)
    {
        $checking = $this->db->num_rows("select id from review where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `review` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($id)
    {
        $data = $this->db->fetchArray("SELECT * FROM `review` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `review` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}