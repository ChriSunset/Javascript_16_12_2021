"use strict";

/*------------------  Boucle while ------------------*/
// Je crée un compteur
let count = 5;
// Le début du décompte
let i = 0;

while (i < 6) {
  document.write(" Le compte de la boucle while est de : " + i + " /5 <br>");
  i++;
}

i = 0;
while (i <= count) {
  document.write(
    "<br> Le compte de la boucle while est de : " + i + " /5 <br>"
  );
  i++;
}

// do while -> elle fait au moins une fois en tour de boucle
let j = 0;

do {
  j = j + 1;
  document.write(
    "<br> Le compte de la boucle while est de : " + j + " /5 <br>"
  );
} while (j < 5);

// -------------------------------------------------------------------------------
let tabPersonnages = ["sage", "voleur", "rodeur", "guerrier"];
console.log(tabPersonnages);
// nous donne la taille du tableau
let tailleTabPerso = tabPersonnages.length;
console.log(tailleTabPerso);
for (let k = 0; k < tailleTabPerso; k++) {
  document.write("<br> Le " + tabPersonnages[k] + " attaque<br>");
  if (k === 3) {
    document.write("<br> attaque multiple ");
  }
}

/************* For in ************/
// Pour utiliser les paramètres des objets
let obj = { a: 1, b: 2, c: 3 };

for (let propriete in obj) {
  document.write(`<br> Le key : ${propriete} -> valeur: ${obj[propriete]}`);
}
