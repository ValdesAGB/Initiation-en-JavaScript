let tab = [-2, 1, 4];

function addictionne(x){
    return x+2;
}

function affiche(){
    alert(`${addictionne(tab[0])}`);

    /*Explication de l'utilisation de tab[tab.lenght-1] 

        tab.lenght affichera 3 qui est le nombre d'élement contenu dans tab ;

        tab[tab.lenght-1] = tab[3 - 1] : nous affichera l'élément ayant pour clé 2;
        
        Or dans l'exo on dit appliqué additonne() au premier élément , puis au dernier élément de tab en utilsant la propriété lenght.

        On aurait pu faire additionne(tab[2]) pour le dernier élément vu qu'on connait sa clé qui est 2 mais en tenant compte de la consigne, tab[tab.lenght - 1], nous donne accès a l'élément ayant pour clé 2 qui est le dernier élément. 
        
        Pour ce fait, on fait addition(tab[tab.lenght-1]).

        Cette méthode serait efficace pour un tableau dont-on ne connait le nombre d'élément.

    */
    
    alert(`${addictionne(tab[tab.length-1])}`);
}