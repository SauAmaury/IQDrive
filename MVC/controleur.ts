/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
///<reference path="connexion.ts"/>
///<reference path="vue.ts"/>


class Controleur{
      
    private vue: Vue;
    private co: Connexion;


            constructor()
            { }

            initialiser(v: Vue)
            {
                this.vue = v;
            }

            checkIdent(lg:string,mdp:string) : boolean
            {               
                this.co = new Connexion(lg, mdp);
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