<?php


namespace app;


class Core
{
    public function __construct()
    {
        ErrorReport === 0 ? error_reporting(false) : error_reporting(E_ALL);
    }

    public function response($message, $type = "danger", $status = 400, $data = [])
    {
        echo json_encode(['message' => $message, 'type' => $type, 'status' => $status, 'data' => $data]);
    }

    public function file_upload($name, $random = true, $customName = null, $size = false)
    {
        if (isset($_FILES[$name])) {
            $ex_name = explode('.', $_FILES[$name]['name']);
            $type = end($ex_name);
            $file_tmp = $_FILES[$name]['tmp_name'];
            $file_size = $_FILES[$name]['size'];
            if ($size <= $file_size) {
                $filName = $random == true ? substr(sha1(md5(mt_rand(1000001, 9999999))), 0, 10) : $customName;
                $fileName = $filName . '.' . $type;
                $fileUploadName = APP_ROOT . 'api/uploads/' . $fileName;
                if (file_exists($fileUploadName) == false) {
                    $upload = move_uploaded_file($file_tmp, $fileUploadName);
                    if ($upload === true) {
                        return $fileName;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    public function custom_file_upload($name, $file_tmp, $file_size, $random = true, $customName = null, $size = false)
    {
        if (isset($name)) {
            $ex_name = explode('.', $name);
            $type = end($ex_name);
            if ($size <= $file_size) {
                $filName = $random == true ? substr(sha1(md5(mt_rand(1000001, 9999999))), 0, 10) : $customName;
                $fileName = $filName . '.' . $type;
                $fileUploadName = APP_ROOT . 'api/uploads/' . $fileName;
                if (file_exists($fileUploadName) == false) {
                    $upload = move_uploaded_file($file_tmp, $fileUploadName);
                    if ($upload === true) {
                        return $fileName;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    public function file_destroy($fileName, $secure = false)
    {
        $s_type = $secure === true ? 'secure' : 'public';
        $fileDelete = APP_ROOT . 'api/uploads/' . $fileName;
        if (file_exists($fileDelete)) {
            unlink($fileDelete);
            return true;
        }
    }

    public function slug($text, $divider = '-')
    {
        $text = preg_replace('~[^\pL\d]+~u', $divider, $text);
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
        $text = preg_replace('~[^-\w]+~', '', $text);
        $text = trim($text, $divider);
        $text = preg_replace('~-+~', $divider, $text);
        $text = strtolower($text);
        $text = preg_replace('/\$(\d)/', '\\\$$1', $text);;
        if (empty($text)) {
            return 'n-a';
        }

        return $text;
    }
}