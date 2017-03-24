/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
///<reference path="connexion.ts"/>
///<reference path="vue.ts"/>
///<reference path="../Mock/FakeBDD.ts"/>
///<reference path="../IControleur.ts"/>


class Controleur implements IControleur{
      
    private vue: Vue;
    private co: IConnexion;


            constructor()
            { }

            initialiser(v: Vue)
            {
                this.vue = v;
            }

            checkIdent(lg:string,mdp:string) 
            {               
                this.co = new FakeBDD(lg, mdp);
                this.co.initialiser(this);
                this.co.request();                
            }

            sendRes(b: boolean)
            {
                this.vue.conneted(b);
                if (b)
                {
                    //Lancer le controleur du dashboard
                    window.location.href = "../html/dashboard.html";
                }
            }

            deconnexion()
            { this.co.close(); }

            
}