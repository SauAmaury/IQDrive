/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />


class Vue_dash implements IVue {

    private Controleur_dash: Controleur_dash;

    constructor(c: Controleur_dash)
    {
        this.Controleur_dash = c;
        this.evenement();
        $("#onglet-1").show();
        $("#onglet-2").hide();
        $("#onglet-3").hide();
  
        
    }

    evenement()
    {
        let that = this;
        $("#lg").click(function (event) {
            event.preventDefault();
            that.Controleur_dash.deconnexion();       
        });

                        
        $("#main,#main-2,#main-3").click(function(){
            $("#onglet-1").show();
            $("#onglet-2").hide();
            $("#onglet-3").hide();
        });

        $("#upload,#upload-2,#upload-3").click(function () {
            $("#onglet-1").hide();
            $("#onglet-2").show();
            $("#onglet-3").hide();
        });
        $("#user,#user-2,#user-3").click(function () {
            $("#onglet-1").hide();
            $("#onglet-2").hide();
            $("#onglet-3").show();
        });


    }

    
}
