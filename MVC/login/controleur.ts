/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
///<reference path="connexion.ts"/>
///<reference path="vue.ts"/>
///<reference path="../Mock/FakeBDD.ts"/>


class Controleur{
      
    private vue: Vue;
    private co: IConnexion;


            constructor()
            { }

            initialiser(v: Vue)
            {
                this.vue = v;
            }

            checkIdent(lg:string,mdp:string) : boolean
            {               
                this.co = new FakeBDD(lg, mdp);
                this.co.initialiser(this);
                this.co.request();
                return true;
            }

            sendRes(b: boolean)
            {
                this.vue.conneted(b);
            }

            deconnexion()
            { this.co.close(); }

            
}