class Reset
{
	private image = "reset.jpg"

	constructor()
	{
		$('#reset').attr('src', this.image);
		$('#reset').click(this.clicGauche);
		$('#reset').width(80);
		$('#reset').height(80);
	}

	private clicGauche()
	{
		$('#lena').width(100);
		$('#lena').height(100);
	}
}