/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />


class Vue_dash implements IVue {

    private Controleur_dash: Controleur_dash;

    constructor(c: Controleur_dash)
    {
        this.Controleur_dash = c;
        this.evenement();
        
    }

    evenement()
    {
        let that = this;
        $("#lg").click(function () {
            that.Controleur_dash.deconnexion();       
        });


        $("#onglet-1").show();
        $("#onglet-2").hide();
        $("#onglet-3").hide();

    }

    
}
