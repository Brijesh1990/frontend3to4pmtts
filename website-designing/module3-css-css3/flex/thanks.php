
<?php
// applied php mailer
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
//Load Composer's autoloader
// require 'vendor/autoload.php';
//Create an instance; passing `true` enables exceptions
if(isset($_POST["sub"]))
{
require('PHPMailer/Exception.php');
require('PHPMailer/PHPMailer.php');
require('PHPMailer/SMTP.php');    
$mail = new PHPMailer(true);
try {
    //Server settings
    $fname=$_POST["fname"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $subject=$_POST["subject"];
    $message=$_POST["message"];
    $mail->SMTPDebug = false;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'brijeshpandey.tops@gmail.com';                     //SMTP username
    $mail->Password   = 'ansm nbfe uypx ugoi';                               //SMTP password
    $mail->SMTPSecure = "tls";            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($_POST["email"], 'Mailer');
    $mail->addAddress('brijeshpandey.tops@gmail.com', 'Admin');     //Add a recipient
    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contact us Enquiry details';
    $mail->Body    = "<img src='https://media.lordicon.com/icons/wired/lineal/177-envelope-send.gif' />"."<br>"."<h4>The details of customers is :"."<br>"."Customers name is :".$fname."<br>"."Customers email is :".$email."<br>"."Subject for contacts is :".$subject."<br>"."Message of customers is :".$message."<br>"."Customers Phone is :".$phone."<br>"."<h4>"."<br>"."This is a contact us email formate comes from website";
    $mail->send();
    echo "<script>
    window.location='thanks.php';
    </script>";
} 

catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}

?>
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<title>Online Brijesh kumar Pandey Portfolio | Web developer | Merstack developer | Mean stack developer | Fullstack developer | Frontend developer</title>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<link rel='stylesheet' type='text/css' media='screen' href='css/style.css'>
<link rel='stylesheet' type='text/css' media='screen' href='css/font-awesome.min.css'>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<script src='main.js'></script>
</head>
<body>
<!-- Brijesh Portfolio Header section -->
<section id="portfolio-header">
<div class="logo">
    <h1><a href="index.html" style="text-decoration: none; color: white;">Brijesh kumar pandey</a></h1>
</div> 
<div class="navbar">
<ul>
<li><a href="#portfolio-content">Portfolio</a></li>
<li><a href="#about-us">about</a></li>
<li><a href="#contactus">contact</a></li>
<li><a href="#">download my cv</a></li>
</ul>
</div>   
</section>
<!-- Brijesh Portfolio content section -->
<section id="portfolio-content">
<h1 style="text-align: center; font-size: 80px;">Thanks for contact with us!!</h1>
<p align="center" style="color: black;">Our one of admin is contact with you Soon! <br></p>
<p><img src="https://i.pinimg.com/originals/29/56/6a/29566a5cfa9dc16bdf11568db628418b.gif"  style="width:400px; height: 350px;"/></p>    



</section>
<!-- Brijesh Portfolio Footer section -->
<section id="portfolio-footer"> 
<div class="location">
<h1>Location</h1>
<p>Tops Technologies Pvt.Ltd <br>
Naptune Tower 4th floor kalawad Main Road ,Rajkot.
360001</p>
</div>
</div>
<div class="arround">
<h1>Arround the web</h1>
<p>Facebook | Twiiter | instagram</p>

</div>
<div class="contact">
<h1>Contact</h1>
<p>+91 9173357217 or <br>do u like my job? contact me.
</p>

</div>
</section>
</body>
</html>
