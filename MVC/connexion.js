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
            success: function (resultat) { that.ctrl.sendRes(resultat); },
            error: function (error) { console.log(error); }
        });
    };
    Connexion.prototype.isConnected = function () {
        var req = $.ajax({
            url: "php/checkSession.php",
            method: "POST",
            dataType: "JSON",
            success: function (resultat) { console.log(resultat); },
            error: function (error) { console.log(error); }
        });
    };
    Connexion.prototype.close = function () {
        var req = $.ajax({
            url: "php/finSession.php",
            success: function (resultat) { console.log("Deconnexion"); },
            error: function (error) { console.log("Erreur deconnexion"); }
        });
    };
    return Connexion;
}());
