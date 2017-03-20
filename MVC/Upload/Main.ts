///<reference path="chargement.ts"/>
///<reference path="formulaire.ts" />
///<reference path = "Controleur.ts"/>

function Main_dash() : void
{
    let ctrl: IControleur = new ControleurUpload();
    let vue: IVue = new VueUpload(ctrl);
	let formulaire: Formulaire = new Formulaire('#frm');
	let chargement: Chargement = new Chargement(formulaire);
	chargement.TraiterChargement();
}

$(window).ready(()=>{
	Main_dash();
});