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
            $fetch = $this->database->fetchArray("select * from users where `email`='$email' and `password`='$password'");
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
        $role = $data['role'];
        $token = sha1(md5($email . $password));
        if (empty($name) || empty($email) || empty($password) || empty($role) || empty($token)) {
            $this->core->response("All Field Required");
            exit;
        }
        $checking = $this->database->num_rows("select email from users where email='$email'");
        if ($checking > 0) {
            $this->core->response("User already exist");
            exit;
        }
        $this->database->insert("INSERT INTO `users`(`name`, `email`, `password`, `role`, `token`) VALUES ('$name','$email','$password','$role','$token')", "users");
    }

    public function edit($data)
    {
        $id = $data['id'];
        $name = $this->database->real_scape_str($data['name']);
        $email = $data['email'];
        $password = $data['password'];
        $role = $data['role'];
        $token = sha1(md5($email . $password));
        if (empty($name) || empty($email) || empty($password) || empty($role) || empty($token)) {
            $this->core->response("All Field Required");
            exit;
        }
        $checking = $this->database->num_rows("select email from users where email='$email'");
        if ($checking > 0) {
            $this->core->response("User already exist");
            exit;
        }
        $this->database->update("UPDATE `users` SET `name`='$name',`email`='$email',`password`='$password',`role`='$role',`token`='$token' WHERE id='$id'", "users", $id);
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
        $checking = $this->database->num_rows("select id from users where id='$id'");
        if ($checking > 0) {
            $this->database->delete("DELETE FROM `users` WHERE id='$id'");
            exit;
        }
        $this->core->response("Data not found!");
    }
}