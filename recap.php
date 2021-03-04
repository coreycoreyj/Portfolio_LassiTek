<?php
//$array = array("token" => $_POST['token']);

//echo json_encode($array);
$secretKey = "6LdNYPkZAAAAAHIWbiIyt6v2dUSsTO7w6rct7ca6";
$statusMsg = '';
print_r($_POST);
if(isset($_POST['submit'])){
    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){
        
        // Get verify response data
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['captcha-response']);
            echo $verifyResponse;
        $responseData = json_decode($verifyResponse);
        if($responseData->success){
            //Contact form submission code goes here ...
  
            $statusMsg = 'Your contact request have submitted successfully.';
        }else{
            $statusMsg = 'Verification failed, please try again.';
        }
    }else{
        $statusMsg = 'Verification failed, please try again.';
    }
}
echo "Done \n";
echo $statusMsg;

?>