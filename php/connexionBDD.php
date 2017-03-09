<?php

class connexionBDD {
    
    private $bdd = null;    


    public function __construct() {
		try{
			$this->bdd = new PDO('mysql:host=localhost;dbname=drive','root','');      
		}
		catch(Exception $e){
            echo json_encode("ERREUR BDD");
			die('Erreur : '.$e->getMessage());
		}


	}    
    public function getConnexion(){
        return  $this->bdd;
    }
}
    

?>
