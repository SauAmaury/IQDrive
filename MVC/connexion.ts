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
        let that = this;
        let req = $.ajax({
            url: "php/debutSession.php",
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
            url: "php/checkSession.php",
            method: "POST",
            dataType: "JSON",
            success: (resultat) => { console.log(resultat); res = true; },
            error: (error) => { console.log(error); }
        });     
        return res;
    }

    close()
    {
        let req = $.ajax({
            url: "php/finSession.php",
            success: (resultat) => { console.log("Deconnexion"); },
            error: (error) => { console.log("Erreur deconnexion"); }

        });     
        
    }

}