/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
/// <reference path="controleur.ts"/>
///<reference path="IConnexion.ts"/>


class Inscription {

    private login: string;
    private mdp: string;
    private res: boolean = false;
    private ctrl: Controleur;

    constructor(l: string, m: string)
    {
        this.login = l;
        this.mdp = m;
    }

    initialiser(c: Controleur) : void
    { this.ctrl = c; }

    inscrire(): JQueryXHR {
        let that = this;
        let req = $.ajax({
            url: "../php/inscription.php",
            method: "POST",
            data: { username: that.login, password: that.mdp },
            dataType: "JSON",
            success: (resultat) => { that.res = resultat; },
            error: (error) => { console.log(error); }
        });
        return req;
    }
        estInscrit() : boolean
        {
            this.inscrire().then(function () {
               //on attend
            });
            return this.res;
        }

    

  

}