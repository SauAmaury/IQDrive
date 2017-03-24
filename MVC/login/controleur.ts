/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />
///<reference path="connexion.ts"/>
///<reference path="vue.ts"/>
///<reference path="../Mock/FakeBDD.ts"/>
///<reference path="../IControleur.ts"/>


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
               
                if (b) {
                    window.location.href = "../html/dashboard.html";
                } else {
                    this.vue.Erreur("Identifiant ou mot de passe incorrect");
                }
                
            }

            setInscription(lg: string, mdp: string, mdp2: string)
            {
                if (mdp != mdp2) {
                    this.vue.Erreur("Les mots de passe doivent être identique");
                }else if (mdp =="") {
                    this.vue.Erreur("Le mot de passe ne doit pas être vide");
                } else if (lg == "") {
                    this.vue.Erreur("L'identifiant ne doit pas être vide")
                }else {
                    let ins: Inscription = new Inscription(lg, mdp);
                    ins.initialiser(this);
                    if (ins.estInscrit()) {
                        this.checkIdent(lg, mdp);
                    } else {
                        this.vue.Erreur("L'indentifiant existe déjà ou une erreur inconnu s'est produite");
                    }
                    
                }
            }
        

            
}