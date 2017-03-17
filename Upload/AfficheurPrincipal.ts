///<reference path="Affichable.ts"/>

class AfficheurPrincipal implements Affichable
{

	private id: string = '#affichage';

	constructor()
	{
	}

	public afficher(texte: string): void
	{
		$(this.id).text(texte);
		this.traitementReinitialiser();
	}

	public traitementReinitialiser(): void
	{
		let that = this;
		setTimeout(()=>{
			$('#affichage').text("");
		}, 3000);
	}

}