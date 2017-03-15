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
		let that: AfficheurPrincipal = this;
		setTimeout(that.reinitialiser, 3000);
	}

	public	reinitialiser(): void
	{
		$(this.id).text("");
		console.log('Texte reinitialise');
	}
}