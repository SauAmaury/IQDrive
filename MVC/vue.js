/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
var Vue = (function () {
    function Vue(c) {
        this.ctrl = c;
        this.validate();
    }
    Vue.prototype.validate = function () {
        var that = this;
        $("#bt").click(function (event) {
            event.preventDefault();
            that.log = $("#log").val();
            that.mdp = $("#mdp").val();
            that.ctrl.checkIdent(that.log, that.mdp);
        });
        $("#bt_2").click(function (event) {
            event.preventDefault();
            that.ctrl.deconnexion();
        });
    };
    Vue.prototype.conneted = function (b) {
        if (b == true) {
            console.log("CONNECTER");
        }
        else {
            console.log("pas connecter");
        }
    };
    return Vue;
}());
