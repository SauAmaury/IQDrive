class Lena {

  private image = "Prova.jpg";

  constructor() {
    $('#lena').attr('src', this.image);
    $('#lena').click(this.clicGauche);
    $('#lena').height(150);
    $('#lena').width(150);
  }

  private clicGauche()
  {
	  var height = $('#lena').height();
	  var width = $('#lena').width();

	  width += 100;
	  height += 100;

	  $('#lena').width(width);
	  $('#lena').height(height);
  }
}