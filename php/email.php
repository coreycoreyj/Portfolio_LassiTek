<?php
$data = json_decode(file_get_contents('php://input'));
$first_name = $data->first_name;
$last_name = $data->last_name;
$email = $data->email;
$message = $first_name . "\n";
$message .= $last_name . "\n";
$message .= $email . "\n\n";
$message .= $data->message;
// use wordwrap() if lines are longer than 70 characters
$message = wordwrap($message,70);

// send email
$result = mail("coreyuncp@gmail.com","Lassitek - Contact Form",$message);

echo json_encode(array('success' => true, 'message' => $result));
?>