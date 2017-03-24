///<reference path="formulaire.ts"/>
///<reference path="Deroutable.ts"/>

class Chargement implements Deroutable, IUpload
{
	private form: Formulaire;

	constructor()
	{
	}

	public LierFormulaire(idFormulaire: String): void
	{
		this.form = $(idFormulaire);
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