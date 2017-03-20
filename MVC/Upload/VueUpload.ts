///<reference path="chargement.ts"/>
///<reference path="formulaire.ts"/>
/// <reference path="BouttonDeconnexion.ts"/>
///<reference path="../IControleur.ts"/>
///<reference path="../IVue.ts"/>

class VueUpload implements IVue
{
	private _chargement: Chargement;
	private _pbDeco: BouttonDeconnexion;
	

	constructor(private ctrl: IControleur)
	{
		this.initEvenements();
		this.ctrl = ctrl;
	}

	initEvenements()
	{
		this._pbDeco = new BouttonDeconnexion('#deco');
		this._chargement = new Chargement(new Formulaire('#frm'));
		this._chargement.TraiterChargement();
	}
}