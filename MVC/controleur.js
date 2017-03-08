/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
var Controleur = (function () {
    function Controleur() {
    }
    Controleur.prototype.initialiser = function (v) {
        this.vue = v;
    };
    Controleur.prototype.checkIdent = function (lg, mdp) {
        var co = new Connexion(lg, mdp);
        co.initialiser(this);
        co.request();
    };
    Controleur.prototype.sendRes = function (b) {
        this.vue.conneted(b);
    };
    return Controleur;
}());
