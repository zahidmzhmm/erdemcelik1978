<?php


namespace app;


class Database
{
    private $connection;
    private $core;

    public function __construct()
    {
        $core = new Core();
        $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
        if ($conn == true) {
            $this->connection = $conn;
            $this->core = new Core();
        } else {
            $core->response("Database Connection Error");
        }
    }

    private function query($sql)
    {
        return mysqli_query($this->connection, $sql);
    }

    public function insert($sql, $table, $order = "id")
    {
        $insert = $this->query($sql);
        if ($insert == true) {
            $select = $this->fetchArray("select * from `$table` where 1 order by `$order` desc");
            $this->core->response("Success", "success", 200, $select);
        } else {
            $table === "users" ? $this->core->response("User already exist") : $this->core->response("Data insert problem");
        }
    }

    public function insert2($sql, $table, $order = "id")
    {
        $insert = $this->query($sql);
        if ($insert == true) {
            return $this->fetchArray("select * from `$table` where 1 order by `$order` desc");
        } else {
            return false;
        }
    }

    public function delete($sql)
    {
        $query = $this->query($sql);
        if ($query == true) {
            $this->core->response("Successfully Deleted", "success", 200);
        } else {
            $this->core->response("Data not Found!");
        }
    }

    public function real_scape_str($str)
    {
        return mysqli_real_escape_string($this->connection, $str);
    }

    public function update($sql, $table, $row, $col = "id")
    {
        $update = $this->query($sql);
        if ($update == true) {
            $this->core->response("Success", "success", 200);
            exit;
        } else {
            $this->core->response("Data update problem");
        }
    }

    public function fetchAll($sql)
    {
        $query = $this->query($sql);
        $fetch = mysqli_fetch_all($query, MYSQLI_ASSOC);
        if ($fetch == true) {
            return $fetch;
        } else {
            return false;
        }
    }

    public function fetchArray($sql)
    {
        $query = $this->query($sql);
        $fetch = mysqli_fetch_array($query, MYSQLI_ASSOC);
        if ($fetch == true) {
            return $fetch;
        } else {
            return false;
        }
    }

    public function num_rows($sql)
    {
        return mysqli_num_rows($this->query($sql));
    }
}