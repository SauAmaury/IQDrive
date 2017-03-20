///<reference path="chargement.ts"/>
///<reference path="formulaire.ts" />

function Main_dash() : void
{
    let ctrl: Controleur_dash = new Controleur_dash();
    let vue: Vue_dash = new Vue_dash(ctrl);
	let formulaire: Formulaire = new Formulaire('#frm');
	let chargement: Chargement = new Chargement(formulaire);
	chargement.TraiterChargement();
}

$(window).ready(()=>{
	Main_dash();
});