/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
///<reference path="controleur.ts"/>

class Vue {
  private ctrl: Controleur;
  private log: string;
  private mdp: string;

  constructor(c: Controleur) {
    this.ctrl = c;
    this.validate();
  }

  validate() {
    var that = this;
    $("#bt")
        .click(function(event) {
          event.preventDefault();
          that.log = $("#log").val();
          that.mdp = $("#mdp").val();
          if (that.ctrl.checkIdent(that.log, that.mdp)) {
            window.location.href = "Upload/index.html"
            // lancer la page d'upload
          } else {
            console.log("Connection failed, bad login or password ?")

          }
       });

    $("#bt_2")
        .click(function(event) {
          event.preventDefault();
          that.ctrl.deconnexion();
        });
  }


  conneted(b: boolean) {
    if (b == true) {
      console.log("CONNECTER");
    } else {
      console.log("pas connecter");
    }
  }
}
