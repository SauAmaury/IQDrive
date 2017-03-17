///<reference path="Affichable.ts"/>
///<reference path="formulaire.ts"/>
///<reference path="Deroutable.ts"/>
///<reference path="AfficheurPrincipal.ts"/>

class Chargement implements Deroutable
{
	constructor(private form: Formulaire)
	{
	}


	public TraiterChargement() : boolean
	{
		return this.form.Derouter(this);
	}

	public traitementParallele(): void
	{
		this.Uploader();
	}

	private Uploader() : boolean
	{
		let contenu = this.form.Serialiser();
		let res : boolean = false;
		$.ajax({
			url: this.form.getAction(),
			method: this.form.getMethod(),
			contentType: false,
			processData: false,
			data: contenu,
			success: (s) => {
				let afficheur: Affichable = new AfficheurPrincipal();
				let sub: string = s;
				sub = sub.substr(1, sub.length-2);
				afficheur.afficher(sub);
			},
			error: (err) => {
				console.log(err);
				res = false;
			}
		});

		return res;
	}
}