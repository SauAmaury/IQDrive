/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
/// <reference path="controleur.ts"/>
///<reference path="IConnexion.ts"/>


class Connexion implements IConnexion
{
    private login: string;
    private mdp: string;
    private ctrl: Controleur;

    constructor(l: string, m: string)
    {
        this.login = l;
        this.mdp = m;
    }

    initialiser(c: Controleur) : void
    { this.ctrl = c; }

    request() : void
    {
        let that = this;
        let req = $.ajax({
            url: "../php/debutSession.php",
            method: "POST",
            data: { username: that.login, password: that.mdp },
            dataType: "JSON",
            success: (resultat) => { that.ctrl.sendRes(resultat); },
            error: (error) => { console.log(error); }
        });      
    }

    isConnected(): boolean
    {
		let res: boolean = false;
        let req = $.ajax({
            url: "../php/checkSession.php",
            method: "POST",
            dataType: "JSON",
            success: (resultat) => { console.log(resultat); res = true; },
            error: (error) => { console.log(error); }
        });     
        return res;
    }

  

}