/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
///<reference path="connexion.ts"/>
///<reference path="vue.ts"/>
///<reference path="../Mock/FakeBDD.ts"/>


class Controleur implements IControleur {

    private ctrl_session: controleur_session;   
    private vue: Vue;
    private co: IConnexion;


            constructor()
            {
            this.ctrl_session = new controleur_session();
            this.ctrl_session.login();
            }

            initialiser(v: Vue)
            {
                this.vue = v;
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

            setInscription(lg: string, mdp: string, mdp2: string)
            {
                if (mdp != mdp2) {
                    console.log("Mot de passe différend");                //erreur

                } else {
                    let ins: Inscription = new Inscription(lg, mdp);
                    ins.initialiser(this);
                    ins.inscrire();
                    this.checkIdent(lg,mdp);
                }
            }
        

            
}