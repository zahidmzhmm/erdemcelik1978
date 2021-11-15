<?php


namespace app;

use PHPMailer;

class Mailer
{
    public function task_mail($email, $body)
    {
        $mail = new PHPMailer();
        $mail->SMTPDebug = false;
        $mail->isSMTP();
        $mail->Host = MAILER_HOST;
        $mail->SMTPAuth = true;
        $mail->Username = MAILER_EMAIL;
        $mail->Password = MAILER_PASSWORD;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;
        $mail->setFrom(MAILER_EMAIL, APP_NAME);
        $mail->addAddress($email);
        $mail->isHTML(true);
        $mail->Subject = "Link";
        $mail->Body = $body;
        $mail->send();
    }
}