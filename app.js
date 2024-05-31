const divResultat = document.querySelector("#resultat");


//Création d'un tableau qui va contenir mes éléments (4 lignes et 4 colones)
var tabJeu = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
//Afficher image lié au bouton cliqué - Tableau de résultat qui va contenir le mélange des images
var tabResultat = [
    [1,6,2,4],
    [5,3,2,5],
    [6,1,3,4]
]

//Variable à vide pour récupérer la valeur + Savoir si c'est la 1er ou 2eme click
var oldSelection=[];
var nbAffiche =0;


//Afficher le resultat de mon tableau
afficherTableau ();
function afficherTableau (){
    var txt ="";
    
    for(var i=0; i < tabJeu.length ; i++){
        txt += "<div>";
        for(var j=0; j < tabJeu[i].length ; j++){  
            if(tabJeu[i][j] === 0){
// Présence de / pour désactiver les "" sinon chaine (1-2) qui n'est pas prise en compte
                txt += "<button class='btn btn-primary m-2' style='width:100px;height:100px' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>";
            } else {
                txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:100px;height:100px' class='m-2'>";
            }
            
        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;
}

//Afficher 1 numéro qui correspond à une image dans mon tableau
function getImage(valeur){
    var imgTxt ="";
    switch(valeur){
        case 1: imgTxt += "img/memory-legume/1.svg"
        break;
        case 2: imgTxt += "img/memory-legume/2.svg"
        break;
        case 3: imgTxt += "img/memory-legume/3.svg"
        break;
        case 4: imgTxt += "img/memory-legume/4.svg"
        break;
        case 5: imgTxt += "img/memory-legume/5.svg"
        break;
        case 6: imgTxt += "img/memory-legume/6.svg"
        break;
        default : console.log("cas non pris en compte")
    }
    //Retourner le chemin de l'image correspondant à la valeur
    return imgTxt; 

}

// Création de la fonction "Bouton" pour récuprérer l'élément cliqué de la ligne et de la colonne

function verif(bouton){
//Permet d'incrémenter dès lors que je clique sur un bouton (++)
//1er click nbAffiche valeur 1, 2éme click nbAffiche valeur 2 on rentre dans la vérification
    nbAffiche++;

    var ligne = bouton.substr(0,1);
    var colonne = bouton.substr(2,1);
    console.log(ligne);
    console.log(colonne);
// Incrémenter mon tableau avec la valeur qui correspond à l'élément cliqué
    tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
    afficherTableau(); 

//Vérif valeur ligne colonne correspond à la valeur dans ligne colonne du tableau
//Réinitialiser tabjeu a 0 si les 2 images ne correspondent pas 
    if(nbAffiche>1) {
        if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
            tabJeu[ligne][colonne] = 0;
            tabJeu[oldSelection[0]][oldSelection[1]] = 0;
        }
        afficherTableau();

        nbAffiche = 0;

    }

//Vérifier la ligne et la colonne pour récupérer la valeur  => déclaration de la variable à vide
    oldSelection = [ligne,colonne];

}
