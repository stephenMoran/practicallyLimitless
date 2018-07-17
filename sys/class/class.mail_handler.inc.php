<?php
	require 'PHPMailer/src/PHPMailer.php';
	require 'PHPMailer/src/SMTP.php';
	require 'PHPMailer/src/Exception.php';
	require 'fpdf181/fpdf.php';
	
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	class Mail_Handler {
		public function sendVerificationEmail($email, $verificationLink) {
			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
			    //Server settings
			    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
			    $mail->isSMTP();                                      // Set mailer to use SMTP
			    $mail->Host = 'smtp.sendgrid.net';  				  // Specify main server
				$mail->SMTPAuth = true;                               // Enable SMTP authentication
			    $mail->Username = 'apikey';                			  // username
			    $mail->Password = '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';                     			 
			    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			    $mail->Port = 587;                                    // TCP port to connect to

			    //Recipients
			    $mail->setFrom('iankelleher92@gmail.com', 'Mailer');
			    $mail->addAddress($email);              
			    $mail->addReplyTo('iankelleher92@gmail.com', 'Information');
			   
			    //Content
			    $mail->isHTML(true);                                  // Set email format to HTML
			    $mail->Subject = 'Please click below to verify your identity';
			    $mail->Body = "<a href =".$verificationLink.">".$verificationLink."</a>";
			    $mail->AltBody = $verificationLink;

			    $mail->send();
			    echo 'Message has been sent';
			} catch (Exception $e) {
			    echo 'Message could not be sent.';
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			}
		}	

		public function sendResetPasswordEmail($email, $resetLink) {
			$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
			try {
			    //Server settings
			    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
			    $mail->isSMTP();                                      // Set mailer to use SMTP
			    $mail->Host = 'smtp.sendgrid.net';  				  // Specify main server
				$mail->SMTPAuth = true;                               // Enable SMTP authentication
			    $mail->Username = 'apikey';                			  // username
			    $mail->Password = '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';                     			  
			    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			    $mail->Port = 587;                                    // TCP port to connect to

			    //Recipients
			    $mail->setFrom('iankelleher92@gmail.com', 'Mailer');
			    $mail->addAddress($email);              
			    $mail->addReplyTo('iankelleher92@gmail.com', 'Information');
			   
			    //Content
			    $mail->isHTML(true);                                  // Set email format to HTML
			    $mail->Subject = 'Please click below to reset your password';
			    $mail->Body = "<a href =".$resetLink.">".$resetLink."</a>";
			    $mail->AltBody = $resetLink;

			    $mail->send();
			    echo 'Message has been sent';
			} catch (Exception $e) {
			    echo 'Message could not be sent.';
			    echo 'Mailer Error: ' . $mail->ErrorInfo;
			}
		}
	}
?>
