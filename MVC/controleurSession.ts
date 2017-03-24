/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />

class controleur_session {

    private etat: boolean = false;

    constructor()
    {  }

    verifier(): JQueryXHR
    {
        let that = this;
            let req = $.ajax({
                url: "../php/checkSession.php",
                method: "POST",
                dataType: "JSON",
                success: (resultat) => { that.setEtat(resultat); },
                error: (error) => { console.log(error); }
        });

            return req; 
    }

    setEtat(b: boolean): void
    {
        this.etat = b;        
    }

    login() : void
    {
        let that = this;
        this.verifier().then(function () {
            if (that.etat) {
                window.location.href = "../html/dashboard.html";
            }
        });

       
    }

    dashboard() : void
    {
        let that = this;
        this.verifier().then(function () {
            if (!that.etat) {
                window.location.href = "../html/login.html";
            }
        });
    }

    finSession() : void
    {
        let req = $.ajax({
            url: "../php/finSession.php",
            success: (resultat) => { console.log("Deconnexion"); },
            error: (error) => { console.log("Erreur deconnexion"); }

        });
        window.location.href = "../html/login.html";
    }

           
            
}