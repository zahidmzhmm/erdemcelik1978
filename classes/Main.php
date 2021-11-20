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
                $this->sendAlert($response['task_id']);
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
            $body = API_URI . "/staff/task/addData/" . $sa_id;
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
        $progress = $this->db->num_rows("select id from tasks where status=3");
        $waitTask = $this->db->num_rows("select id from tasks where status=2");
        $doneTask = $this->db->num_rows("select id from tasks where status=1");
        $archive = $this->db->num_rows("select id from tasks where status=4");
        $this->core->response("Success", "success", 200,
            ["progress" => $progress, "waitTask" => $waitTask, "doneTask" => $doneTask, "archive" => $archive]
        );
    }

    public function download($id)
    {
        $data = $this->db->fetchArray("
        select t.id      as task_id,
               t.c_name  as task_cname,
               t.name    as task_name,
               t.phone   as task_phone,
               t.address as task_address,
               t.email   as task_email,
               t.files   as task_files,
               t.notes   as task_notes,
               t.status  as task_status,
               t.files1  as task_files1,
               t.files2  as task_files2,
               sa.id     as send_id,
               u.id      as staff_id,
               u.name    as staff_name,
               u.email   as staff_email,
               u.phone   as staff_phone
        from tasks as t
                 inner join send_alert sa on t.id = sa.task_id
                 inner join users u on sa.staff_id = u.id
        where t.status = 1
          and t.id = '$id'
        order by t.id desc;
        ");
        if ($data !== false) {
            if (!file_exists(APP_ROOT . "api/uploads/download.zip")) {
                $this->profile_txt_gen($data);
            } else {
                unlink(APP_ROOT . "api/uploads/download.zip");
                $this->profile_txt_gen($data);
            }
        } else {
            $this->core->response("Data not Found");
        }
    }

    public function profile_txt_gen($data)
    {
        $files = $data['task_files'];
        $files1 = $data['task_files1'];
        $files2 = $data['task_files2'];
        $uGen = "ID: " . $data['task_id'] . PHP_EOL . "Company Name: " . $data['task_cname'] . PHP_EOL;
        $uGen .= "Name: " . $data['task_name'] . PHP_EOL . "Phone: " . $data['task_phone'] . PHP_EOL;
        $uGen .= "Address: " . $data['task_address'] . PHP_EOL . "Email: " . $data['task_email'] . PHP_EOL;
        $uGen .= "Notes: " . $data['task_notes'] . PHP_EOL . PHP_EOL;
        $uGen .= "Staff ID: " . $data['staff_id'] . PHP_EOL;
        $uGen .= "Staff Name: " . $data['staff_name'];
        $file_fetch = APP_ROOT . 'vendor/profile.txt';
        $zipPath = APP_ROOT . "api/uploads/download.zip";
        file_put_contents($file_fetch, "");
        file_put_contents($file_fetch, $uGen);
        $file_get_contents = file_get_contents($file_fetch, 'profile.txt');
        $zip = new \ZipArchive();
        $zip->open($zipPath, \ZipArchive::CREATE);
        $zip->addFile(APP_ROOT . 'vendor/profile.txt', 'profile.txt');
        if (!empty($files) && file_exists(APP_ROOT . "api/uploads/" . $files)) {
            $zip->addFile(APP_ROOT . "api/uploads/" . $files, $files);
        }
        if (!empty($files2) && file_exists(APP_ROOT . "api/uploads/" . $files1)) {
            $zip->addFile(APP_ROOT . 'api/uploads' . $files1, $files1);
        }
        if (!empty($files2) && file_exists(APP_ROOT . "api/uploads/" . $files2)) {
            $zip->addFile(APP_ROOT . 'api/uploads/' . $files2, $files2);
        }
        $zip->close();
        header('Content-Type: application/octet-stream');
        header("Content-Transfer-Encoding: Binary");
        header("Content-disposition: attachment; filename=\"" . basename($zipPath) . "\"");
        readfile($zipPath);
    }
}