<?php
session_start();
require ('./connexionBDD.php');

$bdd = new connexionBDD();
$res = false;

    $pseudoconnect = $_POST['username'];
    $mdpconnect = $_POST['password'];




$user = $bdd->getConnexion()->prepare("INSERT INTO member (login,password) VALUES (:login,:password)");
$query = $bdd->getConnexion()->prepare("SELECT login FROM member WHERE login = :login");

    $user->bindParam(":login",$pseudoconnect);
    $query->bindParam(":login",$pseudoconnect);
    $user->bindParam(":password",$mdpconnect);

    $query->execute();
    $nb = $query->rowCount();

    if($nb==0)
    {
        if ($user->execute() == true)
        {
            $res = true;
        }

    }else{
        $res = false;
    }
       echo json_encode($res);


?>
