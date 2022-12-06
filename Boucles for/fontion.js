function boucle(){
    let tab = [];

    for(let i = 0;  tab.length < 3 ; i++){
        tab.push(i*i);
    }

    alert(`Tab = ${tab}`)

    console.log(tab)
}

function boucle2(){
    let tab = [] ;

    let longueurDuTableau = parseInt(prompt('Veuillez entrez la longueur du tableau'));
    
    if(longueurDuTableau < 0 || isNaN(longueurDuTableau)){
        alert(`Erreur. Veuillez entre un nombre supérieur ou égale à 0`)
    }else{
        for(let i = 0;  tab.length < longueurDuTableau ; i++){
            tab.push(i*i);
        }
    
        alert(`Tab = ${tab}`)
    
        console.log(tab)
    }
}