/// <reference path="../lib/jquery.d.ts" />
/// <reference path="../lib/jqueryui.d.ts" />
var Vue = (function () {
    function Vue(c) {
        this.ctrl = c;
        this.validate();
    }
    Vue.prototype.validate = function () {
        var that = this;
        $("#bt").click(function () {
            that.log = $("#log").val();
            that.mdp = $("#mdp").val();
            console.log(that.log, that.mdp);
            that.ctrl.checkIdent(that.log, that.mdp);
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
