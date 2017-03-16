<?php

if(isset($_FILES['fichier']))
{
	$dir = __DIR__.'/../fichiers';
	$nom = $_FILES['fichier']['name'];
	if(move_uploaded_file($_FILES['fichier']['tmp_name'], "$dir/$nom"))
	{
		echo json_encode($nom . " : Transfert correctement reussis.");
	}else{
		echo json_encode($nom . " transfert non reussis.");
	}
}else{
	echo json_encode(var_dump($_FILES));
}

?>