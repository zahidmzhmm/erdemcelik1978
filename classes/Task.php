<?php


namespace app;


class Task
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
        $start = $this->db->real_scape_str($data['start']);
        $end = $this->db->real_scape_str($data['end']);
        $c_name = $this->db->real_scape_str($data['c_name']);
        $name = $this->db->real_scape_str($data['name']);
        $phone = $this->db->real_scape_str($data['phone']);
        $address = $this->db->real_scape_str($data['address']);
        $email = $this->db->real_scape_str($data['email']);
        $notes = $this->db->real_scape_str($data['notes']);
        $status = $data['status'];
        $files = !empty($_FILES['files']['name']) ? $this->core->file_upload("files") : "";
        if (empty($c_name) || empty($name) || empty($phone) || empty($address) || empty($email) || empty($status)) {
            $this->core->response("All Field Required");
            exit;
        }
        $this->db->insert("
        insert into tasks
        (start, end, c_name, name, phone, address, email, files, notes, status)
        values
        ('$start','$end','$c_name','$name', '$phone', '$address', '$email', '$files','$notes', '$status');
        ", "tasks");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $start = $this->db->real_scape_str($data['start']);
        $end = $this->db->real_scape_str($data['end']);
        $c_name = $this->db->real_scape_str($data['c_name']);
        $name = $this->db->real_scape_str($data['name']);
        $phone = $this->db->real_scape_str($data['phone']);
        $address = $this->db->real_scape_str($data['address']);
        $email = $this->db->real_scape_str($data['email']);
        $notes = $this->db->real_scape_str($data['notes']);
        $status = $data['status'];
        $files1 = !empty($_FILES['files1']['name']) ? $this->core->file_upload("files1") : "";
        $files2 = !empty($_FILES['files2']['name']) ? $this->core->file_upload("files2") : "";
        if (empty($id) || empty($c_name) || empty($name) || empty($phone) || empty($address) || empty($email) || empty($status)) {
            $this->core->response("All Field Required");
            exit;
        }
        $this->db->update("
        update tasks
        set start='$start',end='$end',c_name='$c_name',name='$name',phone='$phone',address='$address',email='$email',files1='$files1',files2='$files2',notes='$notes',status='$status'
        where id='$id'
        ", "tasks", $id);
    }

    public function view($id)
    {
        $data = $this->db->fetchArray("SELECT * FROM `tasks` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `tasks` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function delete($id)
    {
        $checking = $this->db->num_rows("select id from tasks where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `tasks` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }
}