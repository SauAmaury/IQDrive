/// <reference path="../../lib/jquery.d.ts" />
/// <reference path="../../lib/jqueryui.d.ts" />



class Controleur_dash implements IControleur {

    private vue: Vue_dash;

    constructor()
    {           
    }

    initialiser(v: Vue_dash)
    {
        this.vue = new Vue_dash(this);

    }


           
            
}