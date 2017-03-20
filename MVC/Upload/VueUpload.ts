///<reference path="chargement.ts"/>
///<reference path="formulaire.ts"/>
///<reference path="../IControleur.ts"/>
///<reference path="../IVue.ts"/>

class VueUpload implements IVue
{
	private _chargement: Chargement;
	private _pbDeco: BouttonDeconnexion;
	private ctrl: IControleur;

	constructor()
	{
		this.initEvenements();
	}

	initEvenements()
	{
		this._pbDeco = new BouttonDeconnexion('#deco');
		this._chargement = new Chargement(new Formulaire('#frm'));
		this._chargement.TraiterChargement();
	}
}