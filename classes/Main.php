<?php


namespace app;


class Main
{

    private $db;
    private $core;

    public function __construct()
    {
        $this->db = new Database();
        $this->core = new Core();
    }

    public function select($name)
    {
        if (isset($_GET[$name]) && !empty($name)) {
            return $_GET[$name];
        }
        $this->core->response("Path not Found!");
        exit;
    }

    public function contact($data)
    {
        $name = $this->db->real_scape_str($data['name']);
        $email = $this->db->real_scape_str($data['email']);
        $subject = $this->db->real_scape_str($data['subject']);
        $message = $this->db->real_scape_str($data['message']);
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `contact`(`name`, `email`, `subject`, `message`) VALUES ('$name','$email','$subject','$message')", "contact");
    }

    public function enquiry($data)
    {
        $name = $this->db->real_scape_str($data['name']);
        $email = $this->db->real_scape_str($data['email']);
        $phone = $this->db->real_scape_str($data['phone']);
        $location = $this->db->real_scape_str($data['location']);
        $course = $this->db->real_scape_str($data['course']);
        $message = $this->db->real_scape_str($data['message']);
        if (empty($name) || empty($location) || empty($course) || empty($email) || empty($phone) || empty($message)) {
            $this->core->response("All Field is required");
            exit;
        }
        $this->db->insert("INSERT INTO `enquiry`(`name`, `email`, `phone`, `location`, `course`, `message`) VALUES ('$name','$email','$phone','$location','$course','$message')", "enquiry");
    }

    public function view_all_enquiry()
    {

        // $data = $this->db->fetchAll("SELECT enquiry.name as en_name,enquiry.id as en_id,`email`,`phone`,`location`,courses.name as course_name,`message`
        //                                  FROM enquiry
        //                                  INNER JOIN courses
        //                                  ON enquiry.course = courses.id order by enquiry.id desc");
        $data = $this->db->fetchAll("SELECT * from enquiry order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all_contact()
    {

        $data = $this->db->fetchAll("SELECT * from contact order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }
    public function delete_contact($id)
    {
        $checking = $this->db->num_rows("select id from contact where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `contact` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }
    public function delete_enquiry($id)
    {
        $checking = $this->db->num_rows("select id from enquiry where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `enquiry` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }
}