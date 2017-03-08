/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
var Connexion = (function () {
    function Connexion(l, m) {
        this.login = l;
        this.mdp = m;
    }
    Connexion.prototype.initialiser = function (c) { this.ctrl = c; };
    Connexion.prototype.request = function () {
        var that = this;
        var req = $.ajax({
            url: "php/debutSession.php",
            method: "POST",
            data: { username: that.login, password: that.mdp },
            dataType: "JSON",
            success: function (resultat) { that.ctrl.sendRes(resultat), console.log(resultat); },
            error: function (error) { console.log("Erreur php"); }
        });
    };
    return Connexion;
}());
