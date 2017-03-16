///<reference path="Deroutable.ts"/>

class Formulaire
{
	private _formulaire;

	constructor(id: string)
	{
		this._formulaire = $(id)
	}

	public getMethod() : string
	{
		return this._formulaire.attr('method');
	}

	public getAction() : string
	{
		return this._formulaire.attr('action');
	}

	public Serialiser() 
	{
		var res = null;
		//on test si le navigateur possede l'objet FormData (qui simplifie la serialisation)
		//s'ile ne le possede pas, on serialise avec la fonction serialize
		if(window.FormData)
		{
			res = new FormData(this._formulaire[0]);
		}else{
			res = this._formulaire.serialize();
		}
		return res
	}

	public Derouter(ch: Deroutable) : boolean
	{
		let res: boolean = false;
		this._formulaire.submit((e) =>
		{
			e.preventDefault();
			ch.traitementParallele();
		})

		return res;
	}
}