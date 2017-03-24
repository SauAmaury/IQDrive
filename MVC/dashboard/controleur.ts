/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />



class Controleur_dash implements IControleur {

    private vue: Vue_dash;
    private ctrl_session: controleur_session;
    private utilisateur: Utilisateur;

    constructor()
    {
        this.ctrl_session = new controleur_session();
        this.ctrl_session.dashboard();
        this.utilisateur = new Utilisateur(this);

    }

    initialiser(v: Vue_dash)
    {
        this.vue = new Vue_dash(this);      
    }

    sendIdentifiant(s: string)
    {
        this.vue.afficheIdentifiant(s);
    }

    deconnexion()
    { this.ctrl_session.finSession(); }

           
            
}