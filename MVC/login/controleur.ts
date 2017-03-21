/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
///<reference path="connexion.ts"/>
///<reference path="vue.ts"/>
///<reference path="../Mock/FakeBDD.ts"/>


class Controleur implements IControleur {

    private controleursession: controleur_session;   
    private vue: Vue;
    private co: IConnexion;


            constructor()
            { }

            initialiser(v: Vue)
            {
                this.vue = v;
                this.controleursession = new controleur_session();
                this.controleursession.login();
            }

            checkIdent(lg:string,mdp:string) 
            {
                this.co = new Connexion(lg, mdp);
                this.co.initialiser(this);
                this.co.request();                
            }

            sendRes(b: boolean)
            {
                this.vue.conneted(b);
                if (b)
                {
                    window.location.href = "../html/dashboard.html";
                }
            }

            deconnexion()
            { this.co.close(); }

            
}