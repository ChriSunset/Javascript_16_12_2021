"use strict";
// Je crée un tableau de couleur
let tabColor = ["rouge", "bleu", "vert", null];
console.log(tabColor[0]);
// connaitre la taille d'un tableau
console.log(tabColor.length); //3 entrée
// Pour entrer une nouvelle valeur dans un tableau
tabColor.push("violet");
console.log(tabColor);
console.log(tabColor.length);
//Supprimer le dernier élement du tableau
tabColor.pop(tabColor);
console.log(tabColor);
console.log(tabColor.length);
//Supprimer le premier élement du tableau
tabColor.shift();
console.log(tabColor);
console.log(tabColor.length);
// Ajouter au début
tabColor.unshift("orange");
console.log(tabColor);
console.log(tabColor.length);
// trouver l' index d'un élement dans le tableau
tabColor.indexOf("bleu");
console.log(tabColor.indexOf("bleu"));
// Supprimer un élément à son index
tabColor.splice(3);
console.log(tabColor);

let tabtest = ["un", "deux", [1, 2]];
console.log(tabtest);
console.log(tabtest[0]); //retourne un
console.log(tabtest[2][0]); //retourne 1
console.log(tabtest[0] + tabtest[2][0]); //cela retourne un1 dans la console
