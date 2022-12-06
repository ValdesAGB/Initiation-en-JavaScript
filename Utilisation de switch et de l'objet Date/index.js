function jourDeLaSemaine(){

    var date = new Date();
    
    var jour = date.getDay();

    var tableauDesJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

    alert(`Nous sommes ${tableauDesJours[jour]}`);

}

/* Autre possibilité 

        function jourDeLaSemaine(){

            var date = new Date();

            var jour = date.getDay();

            //let nomDuJour ;

            switch ( jour ){
                

                case 0 : jour = 'dimanche';
                    break;

                case 1 : jour = 'Lundi';
                    break;

                case 2 : jour = 'Mardi';
                    break;

                case 3 : jour = 'Mercredi';
                    break;

                case 4 : jour = 'Jeudi';
                    break;

                case 5 : jour = 'Vendredi';
                    break;

                case 6 : jour = 'Samedi'
                    break;
                
                default : jour = 'inexistant';
            }

            alert(`Nous sommes ${jour}.`);
        }

    */