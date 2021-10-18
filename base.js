//Avant tout, il faut installer nodejs
//disponible à cette adresse: http://nodejs.org/en/ version 14

//Déclarer une variable
//Nomenclature de la variable
//var name = "variable contenant un nom" //variable est une string = une chaine de caractère
// var nom = "Ceci est un nom"
// var chaineDeCaracteres = "variable contenant une chaine de caractères"


// //Afficher le contenu des varables grace à console.log
// //Methode n1 avec le ${<var>}
// console.log(`Contenu de la variable nom = ${nom}`)
// console.log(`Contenenu de la variable chaineDeCaracteres = ${chaineDeCaracteres}`)
// // Methode n2 avec le +
// console.log(`Contenu de la variable nom =` + nom)
// console.log(`Contenu de la variable chaineDeCaracteres =` + chaineDeCaracteres)

// //Presentons nous
// var prenom = "Gautier"
// var nomDeFamille = "ARNAULD DES LIONS"
// var dateDeNaissance = "25 décembre 1985"
// var lieuDeNaissance = "Caen"

// //Ecrire une phrase de présentation dans le terminal
// console.log (`Je soussigne ${prenom} ${ nomDeFamille} ne le ${dateDeNaissance} a ${lieuDeNaissance}`)

// //Une variable sert a stocker une information
// var vrai = true //booleene : vrai | faux dans le code (true | false)
// console.log(vrai)

// var numero = 8 //integrer : 8
// console.log(numero)

// var numeroFloat = 8.268 //float : chiffre avec virgule
// console.log(numeroFloat)

// var string = "Je suis une phrase"
// console.log(string)

// var liste = [
//     "Javascript",
//     8, 
//     true
// ]
// console.log(liste)

var dict ={
    prenom: "Gautier",
    nomDeFamille: "ARNAULD DES LIONS",
    dateDeNaissance: "25 décembre 1985",
    lieuDeNaissance: "Caen",
    passeport: {
        id: "12358523156231861321"
    },
    lieuDeResidence: "Versailles"
    
}
// console.log(dict)

//Ecrire une fonction qui affiche les éléments du dictionnaire
//Declare une fonction
//function nom de la focntion et parametre de la fonction
function displayDictValues(dict) {
    //Ecris la routine (ce qu'il se passe quand tu l'executes)
    console.log(`Je soussigne ${dict.prenom} ${dict.nomDeFamille} ne le ${dict.dateDeNaissance} a ${dict.lieuDeNaissance}`)
    console.log(`Passeport ID: ${dict.passeport.id}`)
    console.log(`Vit actuellement a : ${dict.lieuDeResidence}`)
}
displayDictValues(dict)

var liste = [
    'Gautier', //0
    'ARNAULD DES LIONS', //1
    '25 décembre 1985', //2
    'Caen' //3
]
function displayIdentifyFromList(liste) {
    console.log(`Je soussigne ${liste[0]} ${liste[1]} ne le ${liste[2]} a ${liste[3]}`)
}
displayIdentifyFromList(liste)


// Ecrire une fonction qui affiche les elements du dictionnaire
// Declare une fonction
// function <nomDeLaFonction>(<parametreDeLaFonction>)
function displayIdentityFromDict(dict) {
    // Ecris la routine (ce qu'il se passe quand tu l'executes)
    console.log(`Je soussigne ${dict.prenom} ${dict.nomDeFamille} ne le ${dict.dateDeNaissance} a ${dict.lieuDeNaissance}`)
    console.log(`Passeport ID : ${dict.passeport.id}`)
    console.log(`Actuellement a : ${dict.lieuDeResidence}`)
}
displayIdentityFromDict(dict)


// afficher chaque entree du dictionnaire qui equivaut a une clef et une valeur (<key>: <value>)
function displayEveryKeyValueFromDict(dict) {
    for (var [key, value] of Object.entries(dict)) {
        //
        if (key === 'passeport'){
            for (var [keyPassport, valuePassport] of Object.entries(value)) {
                console.log(`${keyPassport}: ${valuePassport}`)

            }
            //true

        }else
            //false
        console.log(`${key}: ${value}`)
    }
}
displayEveryKeyValueFromDict(dict)