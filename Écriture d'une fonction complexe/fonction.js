// Appel à une fonction retournant une valeur

function aireDeCercle(){
    let rayon = parseFloat(prompt('Entrez le rayon de votre cercle ( en cm).'));
    
    let answers = rayon * rayon * Math.PI;

    alert(`L'aire de la surface de votre cercle de rayon ${rayon} cm est ${answers}.`);
}


// Calcul de la longueur d'un côté de triangle rectangle

/* 1 - Montrons que AM² = 2R(R+x)
    

*/

let coteDuTriangleAMB = (R , x) =>{
    return Math.sqrt(2*R*(R+x));
}


let fonctionQuiCreeLeTableauX = (X) =>{
    
    let tableauDeValeurX = [];

    if(X){

        tableauDeValeurX = [ X, X/2, 0, -X/2, -X];

    }else{
        alert('Veuillez entrez un rayon en cm.')
    }

   console.log(tableauDeValeurX)
   

}

let fonctionQuiCreeLeTableauY = () =>{

    let tableauY = [];

    for ( let element of fonctionQuiCreeLeTableauX()){
        tableauY.push(coteDuTriangleAMB(element))
    }
    
    console.log(tableauY)
}

function fonctionComplexe(){

    let Rayon = parseFloat(prompt('Entrez la valeur de votre rayon en cm.'));

    console.log(fonctionQuiCreeLeTableauX(Rayon));

}