/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />


class Connexion
{
    private login: string;
    private mdp: string;
    private ctrl: Controleur;

    constructor(l: string, m: string)
    {
        this.login = l;
        this.mdp = m;
    }

    initialiser(c: Controleur)
    { this.ctrl = c; }

    request()
    {
        var that = this;
        var req = $.ajax({
            url: "php/debutSession.php",
            method: "POST",
            data: { username: that.login, password: that.mdp },
            dataType: "JSON",
            success: (resultat) => { that.ctrl.sendRes(resultat), console.log(resultat); },
            error: (error) => { console.log("Erreur php"); }

        });      
                

    }


}