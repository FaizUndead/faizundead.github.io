<?php

// header('Content-Type: application/json');
//
// $name = $_POST['name'];
// $message = "Сообщение от пользователя: $name";
//
// $result = mail('admin@master-css.com', 'Тема', $message);
//
// echo json_encode(array(
//    'status' => $result
// ));

header('Content-Type: application/json');

require "js/plugins/PHPMailerAutoload.php";
//print_r($_REQUEST);
$mail = new PHPMailer;
$mail->CharSet = "utf-8";
$name = $_POST['name'];
$message = "Сообщение от пользователя: $name";

//$mail->SMTPDebug = 3;                               // Enable verbose debug output
//$mail->Debugoutput = 'html';

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'faiz2806@gmail.com';                 // SMTP username
$mail->Password = 'z152xcl765k4';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
//$mail->FromName = mb_convert_encoding($header, "UTF-8", "auto");
//$mail->FromName = utf8_decode($_POST['user_name']);
$mail->setFrom('faiz2806@gmail.com', 'Отправитель');
$mail->addAddress('admin@master-css.com', 'Получатель');     // Add a recipient
$mail->addReplyTo('faiz2806@gmail.com', 'Information');
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Hello';
$mail->Body = "$message";


echo json_encode(array(
   'status' => $mail->send()
));
