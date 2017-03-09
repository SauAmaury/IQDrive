/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
var Controleur = (function () {
    function Controleur() {
    }
    Controleur.prototype.initialiser = function (v) {
        this.vue = v;
    };
    Controleur.prototype.checkIdent = function (lg, mdp) {
        this.co = new Connexion(lg, mdp);
        this.co.initialiser(this);
        this.co.request();
        this.co.isConnected();
    };
    Controleur.prototype.sendRes = function (b) {
        this.vue.conneted(b);
    };
    Controleur.prototype.deconnexion = function () { this.co.close(); };
    return Controleur;
}());
