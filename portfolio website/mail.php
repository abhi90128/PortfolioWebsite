<?php
	// Get the form data
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	// Set the recipient email address
	$to = 'ag822106@gmail.com';

	// Set the email subject
	$subject = 'New Message from Portfolio Website';

	// Set the email message
	$body = "Name: $name\nEmail: $email\n\n$message";

	// Set the email headers
	$headers = "From: $email\r\n";
	$headers .= "Reply-To: $email\r\n";

	// Send the email
	mail($to, $subject, $body, $headers);

	// Redirect back to the form page with a success message
	header('Location: index.html?success=true');
	exit;
?>
