/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />

class controleur_session {


    constructor()
    {  }

    verifier() : void
    {
        let that = this;
            let req = $.ajax({
                url: "../php/checkSession.php",
                method: "POST",
                dataType: "JSON",
                success: (resultat) => {that.etat(resultat); },
                error: (error) => { console.log(error); }
            });
           
    }

    etat(b: boolean): boolean
    {
        this.verifier();
        return b;
    }

    login() : void
    {
        if (this.etat)
        {
            window.location.href = "../html/dashboard.html";
        }
    }

    dashboard() : void
    {
        if (!this.etat) {
            window.location.href = "../html/login.html";
        }
    }

    finSession() : void
    {
        let req = $.ajax({
            url: "php/finSession.php",
            success: (resultat) => { console.log("Deconnexion"); },
            error: (error) => { console.log("Erreur deconnexion"); }

        });
        window.location.href = "../html/login.html";
    }

           
            
}