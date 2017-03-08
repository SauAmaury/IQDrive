/**
 * Application
 */
var Main = (function () {
    /**
     * Constructeur
     */
    function Main() {
        this.controleur = new Controleur();
        this.vue = new Vue(this.controleur);
        this.controleur.initialiser(this.vue);
    }
    return Main;
}());
//Démarrage de l'application lorsque la page aura fini de se charger
$(window).ready(function () { var main = new Main(); });
