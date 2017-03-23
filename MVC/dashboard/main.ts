/// <reference path="controleur.ts" />
/// <reference path="vue.ts" />


class Main_dashboard
{

    private controleur: Controleur_dash;
    private ctrl_session: controleur_session;
    private vue: Vue_dash;


  constructor()
  {
      this.ctrl_session = new controleur_session();
      this.ctrl_session.dashboard();
      this.controleur = new Controleur_dash();
      this.vue = new Vue_dash(this.controleur);

	this.controleur.initialiser(this.vue);
  }
}

//Démarrage de l'application lorsque la page aura fini de se charger
$(window).ready(() => { var main:Main_dashboard = new Main_dashboard(); });