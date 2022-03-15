"use strict"
var prompt = require('readline-sync');
const fs = require('fs');

var affichage_perso = require("./affichage_perso");
var Creation_Perso = function(personnages){

var nom = prompt.question("Inserer le nom de votre personnage : ");
var classe = prompt.question("Inserer la classe de votre personnage : ");
var arme = prompt.question("Inserer l'arme de votre personnage : ");
var endurance = prompt.question("Inserer l'endurance de votre personnage : ");
var force = prompt.question("Inserer la force de votre personnage : ");
var agilite =prompt.question("Inserer l'agilite de votre personnage : ");
var intelligence =prompt.question ("Insérer l'intelligence de votre personnage : ");

var personnage = {

        nom,
        classe,
        arme,
        endurance,
        force,
        agilite,
        intelligence, 

}
personnages.push(personnage)
fs.writeFileSync("mespersonnages.txt",JSON.stringify(personnages),"UTF-8");

console.log(personnage);
}
module.exports= Creation_Perso; 



