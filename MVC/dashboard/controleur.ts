/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />



class Controleur_dash implements IControleur {

    private vue: Vue_dash;
    private controleur_session: controleur_session;

    constructor()
    {}

    initialiser(v: Vue_dash)
    {
        this.vue = new Vue_dash(this);      
        this.controleur_session = new controleur_session();
        this.controleur_session.dashboard();
    }

    deconnexion()
    { this.controleur_session.finSession(); }

           
            
}