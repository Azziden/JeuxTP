var prompt = require('readline-sync');




var affichage_perso = function(personnages){
    var choixperso = prompt.question("Choisissez un perso : ")
var perso 

for (let i = 0; i < personnages.length; i++) {
    const element = personnages[choixperso]
    
    perso = element
       
}
console.log(perso)
}

module.exports= affichage_perso;