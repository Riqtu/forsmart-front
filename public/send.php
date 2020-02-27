<?php 

use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json');
// $fio = $_POST['fio'];
// $email = $_POST['email'];
// $course = $_POST['course'];
// $fio = htmlspecialchars($fio);
// $email = htmlspecialchars($email);
// $course = htmlspecialchars($course);
// $fio = urldecode($fio);
// $email = urldecode($email);
// $course = urldecode($course);
// $fio = trim($fio);
// $email = trim($email);
// $course = trim($course);
if (array_key_exists('name', $_POST)) {
    require './PHPMailer.php';
    require './SMTP.php';
    
    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    
    // Настройки SMTP
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPDebug = 0;
    
    $mail->Host = 'ssl://smtp.mail.ru';
    $mail->Port = 465;
    $mail->Username = 'xxx-zet@mail.ru';
    $mail->Password = 'zerogravity1';
    
    // От кого
    $mail->setFrom('xxx-zet@mail.ru', 'Forsmart agency');		
    
    // Кому
    $mail->addAddress('xxx-zet@mail.ru', '');
    
    // Тема письма
    $mail->Subject = 'Новая заявка!';
    
    // Тело письма
    $body = "Имя: " .$_POST["name"].'<br>Телефон: '.$_POST['phone'].'<br>Курс: '.$_POST['course'];
    $mail->msgHTML($body);
    $mail->send();
    echo json_encode($_POST);
}

?>