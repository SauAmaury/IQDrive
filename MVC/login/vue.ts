/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
///<reference path="controleur.ts"/>

class Vue implements IVue {
  private ctrl: Controleur;
  private log: string;
  private mdp: string;
  private mdpr: string;

  constructor(c: Controleur) {
    this.ctrl = c;
    this.validate();
    $("#onglet").fadeIn();
    $("#onglet-2").hide();
  }

  validate() {
    var that = this;
    $("#bt")
        .click(function(event) {
          event.preventDefault();
          that.log = $("#log").val();
          that.mdp = $("#mdp").val();
          that.ctrl.checkIdent(that.log, that.mdp)
        });

    $("#bt-2")
        .click(function (event) {
            event.preventDefault();
            that.log = $("#log-2").val();
            that.mdp = $("#mdp-2").val();
            that.mdpr = $("#mdpr").val();
            that.ctrl.setInscription(that.log, that.mdp, that.mdpr)
        });


    $("#pei")
        .click(function (event) {
            event.preventDefault();
            $("#onglet").hide();
            $("#onglet-2").fadeIn();
            
        });

    $("#dji")
        .click(function (event) {
            event.preventDefault();
            $("#onglet").fadeIn();
            $("#onglet-2").hide();
        });

  }


  Erreur(s:string) {      
          $("#alt").html(s);
    }
  
}
