/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
///<reference path="../controleurSession.ts"/>
///<reference path="../Mock/FakeControleurSession.ts"/>



class Controleur_dash implements IControleur {

    private vue: Vue_dash;
    private ctrl_session: IControleurSession;

    constructor()
    {
        this.ctrl_session = new FakeControleurSession();
        this.ctrl_session.dashboard();

    }

    initialiser(v: Vue_dash)
    {
        this.vue = new Vue_dash(this);      
    }

    deconnexion()
    { this.ctrl_session.finSession(); }

           
            
}