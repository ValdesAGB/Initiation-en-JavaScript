function testWhile(){

    do{

        var chaineDeCaractetre = prompt(`Entrez une chaine de caractère contenu dans des guillement (" ").`);

    } while (chaineDeCaractetre.indexOf("\"") == -1)

    alert(chaineDeCaractetre);

    alert("La chaîne entrée est \""+chaineDeCaractetre+"\"");
    

}