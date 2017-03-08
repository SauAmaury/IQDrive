/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />


class Controleur{
      
        private vue:Vue; 


            constructor()
            { }

            initialiser(v: Vue)
            {
                this.vue = v;
            }

            checkIdent(lg:string,mdp:string)
            {
                var co = new Connexion(lg, mdp);
                co.initialiser(this);
                co.request();
            }

            sendRes(b: boolean)
            {
                this.vue.conneted(b);
            }

}