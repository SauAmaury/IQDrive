///<reference path="chargement.ts"/>
///<reference path="formulaire.ts"/>

class VueUpload
{
	private _chargement: Chargement;
	private _pbDeco: BouttonDeconnexion;

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