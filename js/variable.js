"use strict";
// commentaire 1
/* 

commentaire 2

*/
// KamelCase on commence en minuscule et a chaque nouveau mots on met une majuscule
// Une variable c'est un espace dans lequel on stock des choses : c'est une boite que l'on nomme
var unTexte = "Voici un texte"; // ce qui est à droite donne sa valeur de ce qui est à gauche/
console.log(unTexte);
unTexte = "nouveau texte"; // On peut changer la valeur d'une variable
console.log(unTexte);
// c'est une constante on ne peut la changer
const TVA = 20 / 100;
console.log(TVA);
const tva2 = 5.5 / 100;
console.log(tva2);
// TVA = 25 / 100; => message d'erreur dans la console et stop la le code

let unChiffre = 14; // on peut changer la valeur du let
console.log(unChiffre);
unChiffre = 12;
console.log(unChiffre);

let unChaineDeCaracteres = "Ho ! le beau variant !"; //On peut utiliser les simple ou double quote.
// let echappement = "Je suis l'autre chaine de caractères !"; ici, on echape le caractère

// -----------------------------LA DECONCATENATION ---------------------------------
let number1 = 10;
number1 = 15;
let number2 = 55;
let phraseNumber = "Le chiffre est : " + number1 + " degrés !";
console.log(phraseNumber);
// Les backclic permettent d'éviter la concatenation
let phrase3 = ` Le chiffre est : $(number1) $(number2)`;
console.log(phrase3);

// ------------------------ LES TYPES DE VARIABLES ----------------------------
let string = "Je suis une chaine de caractère";
let number = 24;
let number24 = "24";
console.log(number + parseInt(number24));
let boolean = true; // OUn booléen est true ou false (vrai ou faux)
let array = ["Je", "suis", "mairot", 50, true, false, ["voiture", 15]]; // un tableau
console.log(array); //Un tableau commence à l'index 0 => la première valeur du tableau
console.log(array[1]); //donc ici on a un "suis"
console.log(array);

let object = { prenom: "louis", age: 30, ville: "Paris", km: 70 }; // L'objet fonctionne avec des key et des values key:value

console.log(object);
//
