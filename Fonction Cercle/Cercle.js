function cercle(){
    let rayon = parseFloat(prompt("Entre, en cm, le rayon de votre cercle"))
    console.log (rayon, Math.PI*rayon*rayon)
    return (Math.PI * rayon * rayon)
}