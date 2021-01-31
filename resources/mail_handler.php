<?php 
    $to = "valerio.player1@gmail.com"; // this is your Email address
    $from = ($_POST['email']); // this is the sender's Email address
    $full_name = $_POST['full_name'];
    $message = $_POST['message'];
    $subject = "Form submission";
  
    mail($to,$full_name,$from,$subject,$message);
   
    echo ("Mail sent. Thank you " . $full_name . ", I will contact you shortly.");
    echo ("<a href='http://valeriomattera.com/v-player1/index.html'>Click here to go back</a>")
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
?>