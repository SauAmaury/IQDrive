/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />

//Classe qui servira notamment à changer les information de l'utilisateur

class Utilisateur {

    private identifiant: string;
    private ctrl: Controleur_dash;
   

    constructor(c: Controleur_dash)
    {
        this.getIdentifiant();
        this.ctrl = c;
    }

    getIdentifiant() :void
    {
        let that = this;
        let req = $.ajax({
            url: "../php/getIdentifiant.php",
            method: "POST",
            dataType: "JSON",
            success: (resultat) => { that.identifiant = resultat, that.ctrl.sendIdentifiant(resultat); },
            error: (error) => { console.log(error); }
        });

    }

           
            
}