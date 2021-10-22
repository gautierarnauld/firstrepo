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

console.log(`Je soussigne ${dict.prenom} ${dict.nomDeFamille} ne le ${dict.dateDeNaissance} a ${dict.lieuDeNaissance}`)
console.log(`Passeport ID: ${dict.passeport.id}`)
console.log(`Vit actuellement a : ${dict.lieuDeResidence}`)