<?php


namespace app;


class Task
{

    private $db;
    private $core;
    private $mailer;

    public function __construct()
    {
        $this->db = new Database();
        $this->core = new Core();
        $this->mailer = new Mailer();
    }

    public function add($data)
    {
        $start = strtotime($data['start']);
        $end = strtotime($data['end']);
        $c_name = $this->db->real_scape_str($data['c_name']);
        $name = $this->db->real_scape_str($data['name']);
        $phone = $this->db->real_scape_str($data['phone']);
        $address = $this->db->real_scape_str($data['address']);
        $whatsapp = $data['whatsapp'];
        $email = $this->db->real_scape_str($data['email']);
        $notes = $this->db->real_scape_str($data['notes']);
        $status = $data['status'];
        $data2 = $this->db->insert2("
        insert into tasks
        (whatsapp, start, end, c_name, name, phone, address, email, notes, status)
        values
        ('$whatsapp','$start','$end','$c_name','$name', '$phone', '$address', '$email','$notes', '$status');
        ", "tasks");
        $tid = $data2['id'];
        if ($data2 !== false) {
            $file_count = count($_FILES['files']['name']);
            if ($file_count > 0) {
                for ($i = 0; $i < $file_count; $i++) {
                    $file_name = $_FILES['files']['name'][$i];
                    $tmp_name = $_FILES['files']['tmp_name'][$i];
                    $file_size = $_FILES['files']['size'][$i];
                    $files = $this->core->custom_file_upload($file_name, $tmp_name, $file_size);
                    $this->db->insert2("insert into tbl_files (path, task_id) values ('$files','$tid')", "tbl_files");
                }
            }
            if ($status == 1) {
                $staff = STAFF;
                $this->mailer->task_done("Task Finished <br><br> <a href='" . API_URI . "/taskView/$tid'>View Task</a>");
                $this->db->insert2("insert into send_alert (staff_id, task_id, role) values ('$staff','$tid')", "send_alert");
            }
            $this->core->response("Success", "success", 200, $data2);
        } else {
            $this->core->response("Data not found");
        }

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
        $whatsapp = $data['whatsapp'];
        $file_count = count($_FILES['files']['name']);
        if ($file_count > 0) {
            $this->db->delete("delete from tbl_files where task_id='$id'");
            for ($i = 0; $i < $file_count; $i++) {
                $file_name = $_FILES['files']['name'][$i];
                $tmp_name = $_FILES['files']['tmp_name'][$i];
                $file_size = $_FILES['files']['size'][$i];
                $files = $this->core->custom_file_upload($file_name, $tmp_name, $file_size);
                $this->db->insert2("insert into tbl_files (path, task_id) values ('$files','$id')", "tbl_files");
            }
        }
        if ($status == 1) {
            $this->mailer->task_done("Task Finished <br><br> <a href='" . API_URI . "/taskView/$id'>View Task</a>");
        }
        $this->db->update("
        update tasks
        set whatsapp='$whatsapp',start='$start',end='$end',c_name='$c_name',name='$name',phone='$phone',address='$address',email='$email',notes='$notes',status='$status'
        where id='$id'
        ", "tasks", $id);
    }

    public function view($id)
    {
        $taskData = $this->db->fetchArray("SELECT * FROM `tasks` WHERE id='$id'");
        if ($taskData !== false) {
            $tbl_files = $this->db->fetchAll("SELECT * FROM `tbl_files` WHERE task_id='$id'");
            $this->core->response("Success", "success", 200, ['task' => $taskData, 'files' => $tbl_files]);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->db->fetchAll("SELECT * FROM `tasks` order by id desc");
        if ($data !== false) {
            $count = count($data);
            for ($i = 0; $i < $count; $i++) {
                $task_id = $data[$i]['id'];
                $tbl_files = $this->db->fetchAll("SELECT * FROM `tbl_files` WHERE task_id='$task_id'");
                $task[$i] = $data[$i];
                $task[$i]['files'] = $tbl_files;
            }
            $this->core->response("Success", "success", 200, $task);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function delete($id)
    {
        $checking = $this->db->num_rows("select id from tasks where id='$id'");
        if ($checking > 0) {
            $this->db->delete("DELETE FROM `tasks` WHERE id='$id'");
            $this->db->delete("DELETE FROM `tbl_files` WHERE task_id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }
}