<?php

        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        require "vendor/autoload.php";

        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;



        $mail = new PHPMailer(true);

        $mail->isSMTP();// Set mailer to use SMTP
        $mail->CharSet = "utf-8";// set charset to utf8
        $mail->SMTPAuth = true;// Enable SMTP authentication
        $mail->SMTPSecure = 'tls';// Enable TLS encryption, `ssl` also accepted

        $mail->SMTPDebug = 0;
        $mail->Host = 'smtp.office365.com';// Specify main and backup SMTP servers
        $mail->Port = 587;// TCP port to connect to
        $mail->SMTPOptions = array(
        'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
        )
        );

        $mail->Username = 'luncu.vlad@gmail.com';// SMTP username
        $mail->Password = 'Veganul!$';// SMTP password

        $mail->setFrom($email, $name);//Your application NAME and EMAIL
        $mail->Subject = $subject;//Message subject
        $mail->Body = $message;// Message body
        $mail->addAddress('lunculescu.vlad14@gmail.com', 'Vlad');// Target email


        $mail->send();

        
?>

<!doctype html>
<html>
    <head>
    </head>
    <body>
        <section>
                <div class="star" id="star1"></div>
                <div class="star" id="star2"></div>
                <div class="star" id="star3"></div>
                <div class="star" id="star4"></div>
                <div class="star" id="star5"></div>
                <div class="star" id="star6"></div>
                <div class="star" id="star7"></div>
                <div class="star" id="star8"></div>
        </section>
        <div id=thanks>
                <img src="p/php.png" id="php"></img>
                <p id="tmessage">Your email was sent.<br>
                Thank you for contacting me and I hope that I can provide you exactly what you are searching for.<br>
                I will respond at your message as soon as possible.        
                </p>
                <img src="p/Lunculescu Vlad1.png" id="logophp"></img>
        </div>
    <style>
        section{
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: black;
        top: 0;
        left: 0;
        }
        .star{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        animation: animate 8s ease-in-out infinite;

        }
        #star1{
        background: url('p/star1.png');
        animation-delay: 0s;
        }
        #star2{
        background: url('p/star2.png');
        animation-delay: -1s;
        }
        #star3{
        background: url('p/star3.png');
        animation-delay: -2s;
        }
        #star4{
        background: url('p/star4.png');
        animation-delay: -3s;
        }
        #star5{
        background: url('p/star5.png');
        animation-delay: -4s;
        }
        #star6{
        background: url('p/star6.png');
        animation-delay: -5s;
        }
        #star7{
        background: url('p/star7.png');
        animation-delay: -6s;
        }
        #star8{
        background: url('p/star8.png');
        animation-delay: -7s;
        }

        @keyframes animate{
        0%, 20%,40%,60%,80%,100%{
        opacity: 0;
        }
        10%,30%,50%,70%,90%{
        opacity: 1;
        }
        }
        #thanks{
                position: absolute;
                background: white;
                opacity: 0.9;
                width: 65%;
                height: 50%;
                top: 25%;
                left: 18%;
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                animation: fadeInFromNone 1.5s ease-out;
        }
        @keyframes fadeInFromNone {
                0% {
                        display: none;
                        opacity: 0;
                }

                1% {
                        display: block;
                        opacity: 0;
                }

                100% {
                        display: block;
                        opacity: 0.9;
        }
        }
        #tmessage{
                letter-spacing: 1px;
                font-weight: bold;
                text-align: center;
                font-size: 2vw;
                margin-top: 9%;
                margin-left: 45%;
                margin-right: 3%;
        }
        #php{
                position: absolute;
                left: 5%;
                top: 10%;
                height: 85%;
                width: 35%;
        }
        #logophp{
                width: 6vw;
                height: 10vh;
                position: absolute;
                bottom: 1vh;
                right: 1vw;
                opacity: 0;
                transition: 1s;
        }
        #logophp:hover{
                opacity: 1;
        }
    </style>
    </body>
</html>
