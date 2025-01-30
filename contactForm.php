<?php
if (isset($_POST['submit'])){
    $kategori = $_POST['kategori'];
    $name = $_POST['name'];
    $mailForm = $_POST['mail'];
    $message = $_POST['message'];
    $budget = $_POST['budget'];


    $mailTo = "webduluindonesia@gmail.com";
    $headers = "From: ".$mailForm;
    $txt = "You have receive an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.html?mailsend");

}
?>
