<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);
    
    if (!empty($name) && !empty($email) && !empty($message)) {
        $to = "webduluindonesia@gmail.com"; // Ganti dengan email Anda
        $subject = "Pesan Baru dari $name";
        $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";
        
        $body = "Nama: $name\nEmail: $email\nPesan:\n$message";
        
        if (mail($to, $subject, $body, $headers)) {
            echo "Pesan berhasil dikirim.";
        } else {
            echo "Terjadi kesalahan, silakan coba lagi.";
        }
    } else {
        echo "Harap isi semua bidang.";
    }
}
?>
