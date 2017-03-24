///<reference path="chargement.ts"/>
///<reference path="formulaire.ts" />
///<reference path="../IVue.ts"/>

function Main_dash() : void
{
    let ctrl: IControleur = new ControleurUpload();
	let chargement: Chargement = new Chargement();
	chargement.LierFormulaire('#frm');
	chargement.TraiterChargement();
}

$(window).ready(()=>{
	Main_dash();
});