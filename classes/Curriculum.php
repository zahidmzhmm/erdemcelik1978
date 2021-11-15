<?php


namespace app;


class Curriculum
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
        $content = $this->db->real_scape_str($data['content']);
        $course_id = $data['course_id'];
        if (empty($title) || empty($content) || empty($course_id)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO curriculum (`title`, `content`, `course_id`) VALUES ('$title','$content','$course_id')", "curriculum");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $title = $data['title'];
        $content = $this->db->real_scape_str($data['content']);
        $course_id = $data['course_id'];
        if (empty($id) || empty($title) || empty($content) || empty($course_id)) {
            $this->core->response("All Field is required");
            exit;
        }
        $checking = $this->db->num_rows("select id from curriculum where id='$id'");
        if ($checking == 1) {
            $this->db->update("UPDATE `curriculum` SET `title`='$title',`content`='$content',`course_id`='$course_id' WHERE id='$id'", "curriculum", $id);
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function delete($id)
    {
        $checking = $this->db->num_rows("select id from curriculum where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `curriculum` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }

    public function view($id)
    {
        $data = $this->db->fetchArray("SELECT * FROM `curriculum` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `curriculum` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
}