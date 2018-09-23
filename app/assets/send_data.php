<?php
	$recipient = "rhicks009@gmail.com, andrew@mandelbrot.mx";
	$subject = "Request of TGP Franchise Opportunity";

	$name = $_POST['name'];
	$lastname = $_POST['lastname'];
	$tel = $_POST['tel'];
	$email = $_POST['email'];
	$feedback = $_POST['feedback'];

	$formcontent="Hey Ryan, this is a new email written by a user from modrnbusiness.com/TGP; this is what they say:\n\nHi, my name is $name $lastname, my email address is: $email and my cellphone number is: $tel.\nI have feedback for you:\n $feedback";
	$mailheader = "From: $email \r\n";

	// Write in the .txt file
	$new_subscriber = "Full name: $name $lastname, Cellphone: $tel, Email: $email"."\n";
	$file = fopen("mbo_repo_requesters.txt", "r+") or die("Unable to open file!");
	fread($file,filesize("mbo_repo_requesters.txt"));
	fwrite($file, $new_subscriber);
	fclose($file);
	echo("Subscriber data collected correctly.");

	// Send email with user data
	$mail_sent = mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	if ($mail_sent == true){ ?>
		<script language="javascript" type="text/javascript">
			// alert('Great! Your message was sent successfully.');
			// window.location = '/';
			console.log('Great! Your message was sent successfully.');
		</script>

	<?php 
	} else {
	?>
		<script type="text/javascript">
			alert('There was an error and the message could not be sent, try again and if the error persists, try to reach us on our social media channels.');
			window.location = '/';
		</script>
	
	<?php 
	}
?>
