<?php
session_start();
require ('./connexionBDD.php');

$bdd = new connexionBDD();
$res = false;

    $pseudoconnect = $_POST['username'];
    $mdpconnect = $_POST['password'];




$user = $bdd->getConnexion()->prepare("INSERT INTO member (login,password) VALUES (:login,:password)");

    $user->bindParam(":login",$pseudoconnect);
    $user->bindParam(":password",$mdpconnect);




       if ($user->execute() == true)
       {
           $res = true;
       }
       else
       {
           $res = false;
       }

       echo json_encode($res);


?>
