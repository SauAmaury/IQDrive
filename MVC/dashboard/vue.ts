/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />


class Vue_dash implements IVue {

    private Controleur_dash: Controleur_dash;

    constructor(c: Controleur_dash)
    {
        this.intialiser();
        this.Controleur_dash = c;
        this.evenement();     
    }

    intialiser()
    {
        $("#dash").show();
        $("#upload").hide();
        $("#profile").hide();
        $("#main").addClass("active");
    }

    evenement()
    {
        let that = this;
        $("#lg").click(function (event) {
            event.preventDefault();
            that.Controleur_dash.deconnexion();       
        });

                        
        $("#main").click(function () {
            $("#main").addClass("active");
            $("#upl,#user").removeClass();
            $("#dash").show();
            $("#upload").hide();
            $("#profile").hide();
        });

        $("#upl").click(function () {
            $("#upl").addClass("active");
            $("#main,#user").removeClass();
            $("#dash").hide();
            $("#upload").show();
            $("#profile").hide();
        });
        $("#user").click(function () {
            $("#user").addClass("active");
            $("#main,#upl").removeClass();
            $("#dash").hide();
            $("#upload").hide();
            $("#profile").show();
        });


    }

    afficheIdentifiant(s: string): void
    {
        $("#pseudo").html(s);
    }
}
