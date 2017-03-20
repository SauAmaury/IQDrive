

class Controleur_dash implements IControleur{
      
    private vue: Vue_dash;
    private co: IConnexion;


            constructor()
            { }

            initialiser(v: Vue_dash)
            {
                this.vue = v;
            }
    
            
}