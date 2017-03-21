/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />



class controleur_session {

    private session: boolean = false;

    constructor()
    { this.verifier(); }

    verifier() : void
    {
        let that = this;
            let req = $.ajax({
                url: "../php/checkSession.php",
                method: "POST",
                dataType: "JSON",
                success: (resultat) => {that.action(resultat); },
                error: (error) => { console.log(error); }
            });
           
    }

    action(b: boolean): void
    {
        if (!b) { window.location.href = "../html/login.html"; }
        console.log(b);
        
    }


           
            
}