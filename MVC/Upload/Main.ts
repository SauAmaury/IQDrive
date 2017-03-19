///<reference path="chargement.ts"/>
///<reference path="formulaire.ts" />

function Main() : void
{
	let formulaire: Formulaire = new Formulaire('#frm');
	let chargement: Chargement = new Chargement(formulaire);
	chargement.TraiterChargement();
}

$(window).ready(()=>{
	Main();
});