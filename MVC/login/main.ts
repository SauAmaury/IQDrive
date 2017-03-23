///<reference path="controleur.ts"/>
///<reference path="vue.ts"/>


class Main
{
 
    private controleur: Controleur;
    private vue: Vue;

  
  constructor()
  {
   
      this.controleur = new Controleur();
      this.vue = new Vue(this.controleur);
	  this.controleur.initialiser(this.vue);
  }
}


$(window).ready(() => { var main:Main = new Main(); });