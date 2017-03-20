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
		this.raffraichir();
		this.ctrl = ctrl;
	}

	public initEvenements() : void
	{
		this._pbDeco = new BouttonDeconnexion('#deco');
		this._chargement = new Chargement(new Formulaire('#frm'));
		this._chargement.TraiterChargement();
	}

	public raffraichir() : void
	{
		let that: VueUpload= this;
		$.ajax({
			url: '../../php/lister.php',
			method: 'post',
			dataType: 'json',
			success: (data)=>{
				that.decouperString(data).forEach(element => {
					$('#liste').append(element);
				});
			},
			error: (err)=>{
				console.log(err);
			}
			
		});
	}

	public decouperString(liste: string): string[]
	{
		let listeTraitee: string[] = liste.split(',');
		return listeTraitee;

	}
	


}