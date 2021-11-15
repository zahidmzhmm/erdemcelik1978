<?php


namespace app;


class About
{
    private $db;
    private $core;

    public function __construct()
    {
        $this->db = new Database();
        $this->core = new Core();
    }

    public function update($data)
    {
        $checking = $this->db->num_rows("select id from about where id='1'");
        if ($checking == 1) {
            $title = $this->db->real_scape_str($data['title']);
            $subTitle = $this->db->real_scape_str($data['subTitle']);
            $title2 = $this->db->real_scape_str($data['title2']);
            $content1 = $this->db->real_scape_str($data['content1']);
            $content2 = $this->db->real_scape_str($data['content2']);
            $image = !empty($_FILES['image']['name']) ? $this->core->file_upload("image") : $data['image_old'];
            $link = $data['link'];
            $phone1 = $data['phone1'];
            $phone2 = $data['phone2'];
            $email = $data['email'];
            $address = $data['address'];
            $twitter = $data['twitter'];
            $facebook = $data['facebook'];
            $instagram = $data['instagram'];
            $youtube = $data['youtube'];
            $linkedin = $data['linkedin'];
            $pinterest = $data['pinterest'];
            $this->db->update("update about set `title`='$title',`subtitle`='$subTitle',`title2`='$title2',`content1`='$content1',`content2`='$content2',`image`='$image',`link`='$link',`phone1`='$phone1',`phone2`='$phone2',`email`='$email',`address`='$address',`twitter`='$twitter',`facebook`='$facebook',`instagram`='$instagram',`youtube`='$youtube',`linkedin`='$linkedin',`pinterest`='$pinterest'", "about", 1);
        }
        $this->core->response("Data not found!");
    }

    public function view()
    {
        $data = $this->db->fetchArray("SELECT * FROM `about` where id='1'");
        if ($data !== false) {
            $this->core->response("Success", "success", 200, $data);
        } else {
            $this->core->response("Data not found");
        }
    }

}