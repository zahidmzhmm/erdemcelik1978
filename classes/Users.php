<?php


namespace app;


class Users
{
    private $core;
    private $database;

    public function __construct()
    {
        $this->database = new Database();
        $this->core = new Core();
    }

    public function login($data)
    {
        $email = $data['email'];
        $password = $data['password'];
        if (empty($email) || empty($password)) {
            $this->core->response("Email & Password Required");
        } else {
            $token = sha1(md5("admin" . $password));
            $fetch = $this->database->fetchArray("select * from users where `token`='$token'");
            if ($fetch !== false) {
                $this->core->response("Success", "success", 200, $fetch['token']);
            } else {
                $this->core->response("Email or Password Wrong");
            }
        }
    }

    public function add($data)
    {
        $name = $this->database->real_scape_str($data['name']);
        $email = $data['email'];
        $password = $data['password'];
        $token = sha1(md5("admin" . $password));
        $phone = !empty($data['phone']) ? $data['phone'] : "";
        $whatsapp = !empty($data['whatsapp']) ? $data['whatsapp'] : "";
        $role = $data['role'];
        $checking = $this->database->num_rows("select email from users where email='$email'");
        if ($checking > 0) {
            $this->core->response("User already exist");
            exit;
        }
        $this->database->insert("
        insert into users
            (name,email, phone, whatsapp, token, password, role)
        values
            ('$name','$email', '$phone', '$whatsapp', '$token', '$password', '$role');
        ", "users");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $name = $this->database->real_scape_str($data['name']);
        $password = $data['password'];
        $token = sha1(md5("admin" . $password));
        $phone = !empty($data['phone']) ? $data['phone'] : "";
        $whatsapp = !empty($data['whatsapp']) ? $data['whatsapp'] : "";
        $role = $data['role'];
        $this->database->update("
        UPDATE  `users`
        SET
            `name`='$name',`password`='$password',`token`='$token',`phone`='$phone',whatsapp='$whatsapp',role='$role'
        WHERE id='$id'
        ", "users", $id);
    }

    public function view($id)
    {
        $data = $this->database->fetchArray("SELECT * FROM `users` WHERE id='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function viewToken($id)
    {
        $data = $this->database->fetchArray("SELECT * FROM `users` WHERE token='$id'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function view_all()
    {
        $data = $this->database->fetchAll("SELECT * FROM `users` order by id desc");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

    public function delete($id)
    {
            $this->database->update("UPDATE `users` SET deleted='1' WHERE id='$id'", "users", $id);
            exit;
    }
}