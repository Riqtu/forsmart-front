<?php
    $fio = $_POST['fio'];
    $email = $_POST['email'];
    $fio = htmlspecialchars($fio);
    $email = htmlspecialchars($email);
    $fio = urldecode($fio);
    $email = urldecode($email);
    $fio = trim($fio);
    $email = trim($email);
    mail("xxx-zet@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: forsmart@mail.ru \r\n");
?>