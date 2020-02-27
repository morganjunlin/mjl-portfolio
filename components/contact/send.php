Thank you for your message!

<?php
  $guestName    = $_POST['name'];
  $guestEmail   = $_POST['email'];
  $guestMessage = $_POST['message'];

  $to           = "morganjunlin@gmail.com";
  $subject      = "Email from my website";
  $body         = "Information Submitted:";

  $body .= "\r\n Name: " . $guestName;
  $body .= "\r\n Email: " . $guestEmail;
  $body .= "\r\n Message: " . $guestMessage;

  mail($to, $subject, $body);
?>