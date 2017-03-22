/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />


class Vue_dash implements IVue {

    private Controleur_dash: Controleur_dash;

    constructor(c: Controleur_dash)
    {
        this.Controleur_dash = c;
        this.evenement();
        $("#onglet-1").show();
        console.log("Montrer 1");
        $("#onglet-2").hide();
        console.log("Cacher 2");
        
    }

    evenement()
    {
        let that = this;
        $("#lg").click(function () {
            that.Controleur_dash.deconnexion();       
        });

                        
        $("#main,#main2").click(function(){
            $("#onglet-1").show();
            console.log("Montrer 1");
            $("#onglet-2").hide();
            console.log("Cacher 2");
        });

        $("#user,#user2").click(function () {
            $("#onglet-1").hide();
            console.log("Montrer 2");
            $("#onglet-2").show();
            console.log("Cacher 1");
        });

    }

    
}
