<?php


namespace app;


class Main
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

    public function select($name)
    {
        if (isset($_GET[$name]) && !empty($name)) {
            return $_GET[$name];
        }
        $this->core->response("Path not Found!");
        exit;
    }

    public function send($data)
    {
        $staff_id = $data['staff_id'];
        $task_id = $data['task_id'];
        $role = $data['role'];
        if (empty($staff_id) || empty($task_id) || empty($role)) {
            $this->core->response("All Field is required");
        } else {
            $response = $this->db->insert2("
            insert into send_alert
                (staff_id, task_id, role)
            VALUES
                ('$staff_id','$task_id','$role')
            ", "send_alert");
            if ($response !== false) {
                $this->sendAlert($response['id']);
            } else {
                $this->core->response("Something went wrong");
            }
        }
    }

    public function sendAlert($id)
    {
        if (empty($id)) {
            $this->core->response("All Field is required");
            exit;
        }
        $data = $this->db->fetchArray("
        select
            sa.id as sa_id,
            u.id as user_id,
            u.name as user_name,
            u.email as user_email,
            u.phone as user_phone,
            u.role as user_role,
            t.id as task_id,
            t.c_name as task_cname,
            t.name as task_name,
            t.phone as task_phone,
            t.address as task_address,
            t.email as task_email,
            t.files as task_files,
            t.notes as task_notes,
            t.status as task_status
        from send_alert as sa
                 join users u on sa.staff_id = u.id
                 join tasks t on sa.task_id = t.id
        where sa.id='$id'
        ");
        if ($data !== false) {
            $sa_id = $data['sa_id'];
            $user_name = $data['user_name'];
            $user_email = $data['user_email'];
            $body = URL_ROOT . "/staff/task/addData/" . $sa_id;
            $this->mailer->task_mail($user_email, $body);
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function alerts()
    {
        $data = $this->db->fetchAll("
        select
               sa.id as sa_id,
               u.id as user_id,
               u.name as user_name,
               u.email as user_email,
               u.phone as user_phone,
               u.role as user_role,
               t.id as task_id,
               t.c_name as task_cname,
               t.name as task_name,
               t.phone as task_phone,
               t.address as task_address,
               t.email as task_email,
               t.files as task_files,
               t.notes as task_notes,
               t.status as task_status
        from send_alert as sa
            join users u on sa.staff_id = u.id
            join tasks t on sa.task_id = t.id
        ");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function ntwc()
    {
        $newTask = $this->db->num_rows("select id from tasks where status=3");
        $waitTask = $this->db->num_rows("select id from tasks where status=2");
        $doneTask = $this->db->num_rows("select id from tasks where status=1");
        $this->core->response("Success", "success", 200,
            ["newTask" => $newTask, "waitTask" => $waitTask, "doneTask" => $doneTask]
        );
    }
}