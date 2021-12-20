"use strict";

/** ------------------------ CALCULATRICE-------------------------------------
 *
 *
 * faire les fonction pour l'addition soustraction division et multiplication
 * stocké l'information dans une variable
 *
 *
 *
 * */
// 1- faire une fonction pour l'addition x + y
// 2- si on rajoute un chiffre on continue le calcul
// 3- faire une variable de stockage
// 4- optimiser la fonction addition juste x
// 5-faire les autre fonctions attention a la division par 0
// 6- on test la calculatrice dans le console.log

//la variable pour garder le resultat
var resultat = 0;

// Addition
function addition(x, y) {
  return console.log(x + y);
}

/* Addition optimisé
function addition2(x) {
  return (x += x);
}*/

// Soustraction
function soustraction(x, y) {
  return console.log(x - y);
}

// Multiplication
function produit(x, y) {
  return console.log(x * y);
}

// Division (sauf par zéro) ;
function division(x, y) {
  if (y == 0) {
    do {
      y = parseInt(prompt("Saisissez un nombre autre que zero !"));
    } while (y == 0);
  }
  return console.log(x / y);
}

// Operations cumulatives

function additionCalc(x) {
  resultat += x; // resultat => resultat = resultat + x
  return resultat; // Ma fonction va me retourner le nouveau resultat
}

function soustractionCalc(x) {
  resultat -= x;
  return resultat;
}

function produitCalc(x) {
  resultat *= x;
  return resultat;
}

function divisionCalc(x) {
  if (x === 0) {
    return resultat;
  }
  resultat /= x;
  return resultat;
}

function reset() {
  resultat = 0;
  return resultat;
}

/*console.log(addition(5, 2) + 4);
console.log(addition2(4));*/

/*
let operation = prompt(
  "Saisissez une opération à effectuer parmi : + , - , * , / "
);

if (operation == "+") {
  addition(52, 2);
  addition(30, 2);
  addition(25, 8);
  addition(6, 7);
  addition2(8, 5);
} else if (operation == "-") {
  soustraction(5, 2);
  soustraction(15, 4);
  soustraction(-10, 3);
} else if (operation == "*" || operation == "x") {
  produit(10, 8);
  produit(5, 4);
  produit(10, 10);
} else if (operation == ":" || operation == "/") {
  division(100, 5);
  division(10, 5);
  division(15, 5);
} else {
  alert("Ce signe n'existe pas !");
}*/

additionCalc(2);
console.log(resultat);
soustractionCalc(5);
console.log(resultat);
additionCalc(8);
console.log(resultat);
produitCalc(6);
console.log(resultat);
divisionCalc(3);
console.log(resultat);

reset();
console.log(resultat);
