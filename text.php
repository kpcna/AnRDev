<?php
class API {
  function validate(){
    $amount      = $_POST["amount"];
    $firstName   = $_POST["firstName"];
    $lastName    = $_POST["lastName"];
    $email       = $_POST["email"];

    if(isset($amount)){
        $data = array(
            "amount"     => $amount,
            "firstName"  => $firstName,
            "lastName"   => $lastName,
            "email"      => $email
        );
	echo json_encode($data);
	return json_encode($data);
    }
	echo "nothing";
	return "nothing";
  }
}

$api = new API;
$api -> validate();

?>
