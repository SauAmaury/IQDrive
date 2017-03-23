///<reference path="controleur.ts"/>
///<reference path="vue.ts"/>


class Main
{
 
    private controleur: Controleur;
    private ctrl_session: controleur_session;
    private vue: Vue;

  
  constructor()
  {
   
      this.ctrl_session = new controleur_session();
      this.ctrl_session.login();
      this.controleur = new Controleur();
      this.vue = new Vue(this.controleur);
	  this.controleur.initialiser(this.vue);
  }
}


$(window).ready(() => { var main:Main = new Main(); });