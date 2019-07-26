<?php

$response = array();
if(isset($_GET["domain"])){

$domain = $_GET["domain"];
// $domain = $_GET['domain'];
 //echo $_GET['domain'].'<br>';

 if ( gethostbyname($domain) != $domain ) {
 $response["status"] = "danger";
 $response["icon"] = "fa-times-circle";
	$response["msg"] = "Sorry! <a href='http://".$domain."' target='_blank' style='text-decoration: underline; color: darkred'>".$domain."</a> Not Available";
  
 }
 else {
		$response["status"] = "success";
		$response["icon"] = "fa-check-circle";
		$response["msg"] = "<span style='text-decoration: underline'>".$domain."</span> Available";
 }


}else{
}

echo json_encode($response);


?>