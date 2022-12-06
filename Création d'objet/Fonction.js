class CreationObjet {

    constructor(number){
        this.number = number;
    }

    affiche(number){
        number = this.number
        alert ("Le résultat est :" +  number + 4 );
    }
}



function Init(){
    let valeurEntrée = document.getElementById("champSaisie").value;

    let test = new CreationObjet (valeurEntrée);

   

}