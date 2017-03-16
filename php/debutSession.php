<?php
session_start();
require ('./connexionBDD.php');

$bdd = new connexionBDD();
$res = false;

    $pseudoconnect = $_POST['username'];
    $mdpconnect = $_POST['password'];




$user = $bdd->getConnexion()->prepare("SELECT * FROM member WHERE login = :login AND password = :password");

    $user->bindParam(":login",$pseudoconnect);
    $user->bindParam(":password",$mdpconnect);
    $user->execute();

       $getRow = $user->rowCount();

       if ($getRow == 1)
       {
           $userInfo = $user->fetch();
           $_SESSION['id'] = $userInfo['id'];
           $_SESSION['login'] = $userInfo['login'];
           $res = true;
       }
       else
       {
           $res = false;

       }

       echo json_encode($res);


?>
