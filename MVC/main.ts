/**
 * Application
 */
class Main
{
  /**
   * Constroleur principal de l'application
   */
  private controleur: Controleur;

  /**
   * Vue principale de l'application
   */
  private vue: Vue;

  /**
   * Constructeur
   */
  constructor()
  {
      this.controleur = new Controleur();
      this.vue = new Vue(this.controleur);

	this.controleur.initialiser(this.vue);
  }
}

//Démarrage de l'application lorsque la page aura fini de se charger
$(window).ready(() => { var main:Main = new Main(); });