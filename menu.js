"use strict"
var prompt = require('readline-sync');
const fs = require('fs');


var choix;
var quit = false;
var personnages= [];
personnages = JSON.parse(fs.readFileSync("mespersonnages.txt"));


var Creation_Perso = require("./Creation_Perso");
var affichage_perso = require("./affichage_perso");
const sup_perso = require("./sup_perso");

while (!quit) {
        choix = prompt.question(" 1 pour creer un personnage: \n 2 pour selectionner un personnage :\n 3 pour supprimer un personnage :\n 4 pour voir tous vos personnages :\n 5 pour quitter l'application : ");
    
    switch (choix){
        
        case "1":
                Creation_Perso(personnages)
            break;
        
        case "2":
            console.log(" ======= selectionner un personnage ======= ")
            affichage_perso(personnages)
            break;
        
        case "3":
            console.log(" ======= Supprimer un personnage =======\n ");
            sup_perso(personnages);
            break;
        
        case "4":
            console.log(" ======= Voir tous vos personnages ======= ");
            
            // if (!checkIfFileExistsAndCheckIfEmptyOrNot("mespersonnages.txt")){
            //     console.log("Creez votre perso")
            
            //     Creation_Perso(personnages)
            // }else
            personnages = JSON.parse(fs.readFileSync('./mespersonnages.txt',{encoding: 'utf8'}));
           console.log(personnages)
            break;
        
        case "5":
            
        quit = true;
            break;
        

    }

}  

console.dir(personnages);


function checkIfFileExistsAndCheckIfEmptyOrNot(file) {
    let reading;
    if (fs.existsSync(file)) {
        const { size } = fs.statSync(file);
        if (size < 1) return reading = false
        else return reading = true;
    } else return reading = false;
}