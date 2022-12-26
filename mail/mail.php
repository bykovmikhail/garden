<?php


$recepient = "zapadlandshaftstroy@yandex.ru";
$siteName = "Бакеев Групп";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Телефон: $phone\nСообщение: $name";

$pagetitle = "Сообщение с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>