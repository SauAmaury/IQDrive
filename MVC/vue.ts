/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />

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
        $("#bt").click(function () {
            that.log = $("#log").val();
            that.mdp = $("#mdp").val();
            console.log(that.log, that.mdp);   
            that.ctrl.checkIdent(that.log, that.mdp);        
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