<?php
	$name = $_POST['name'];
	$lastname = $_POST['lastname'];
	$tel = $_POST['tel'];
	$email = $_POST['email'];

	$new_subscriber = "Full name: $name $lastname, Cellphone: $tel, Email: $email"."\n";
	$file = fopen("mbo_repo_requesters.txt", "r+") or die("Unable to open file!");
	fread($file,filesize("mbo_repo_requesters.txt"));
	fwrite($file, $new_subscriber);
	fclose($file);
	echo("Subscriber data collected correctly.");
?>
