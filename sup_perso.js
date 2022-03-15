var prompt = require('readline-sync');

const fs = require('fs');


var sup_perso = function(personnages){
var choix
var listePersos = " ============== Quelle personnage voulez vous supprimer ==============  ? \n";

for (var i = 0; i<personnages.length; i++){
    const element = personnages[i];
    listePersos = listePersos + i + " : " + element.nom + "\n";
}
console.log(listePersos);
choix = prompt.question("Choix : ");
personnages.splice(choix, 1);
console.log(" ============== Votre personnage a bien été déporté au bled ============ \n");


fs.writeFileSync("mespersonnages.txt",JSON.stringify(personnages),"UTF-8");
}

module.exports = sup_perso;