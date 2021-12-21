"use strict";

/**
 *
 * Le DOM va signifier Document Object Model
 * C'est une une interface de programmation qui est une représentation du HTML (de la page web)
 *
 * Grace au DOM on peut injecter du texte, des images,des block entier d'HTML
 *
 *
 * **/

let selectBody = document.getElementsByTagName("body");

console.log(selectBody); // dans la console, c'est un HTMLCollection -> Tableau
selectBody[0].style.background = "lightblue";

let selectBtn = document.getElementsByTagName("button");
console.log(selectBtn);
selectBtn[0].style.fontWeight = "700"; // Le premier bouton (fontweight -> texte en gras)
selectBtn[1].style.fontWeight = "700"; // Le second bouton

// Pour selectionner tous les boutons, je dois faire une boucle

console.log(selectBtn.length);

for (let i = 0; i < selectBtn.length; i++) {
  selectBtn[i].style.background = "orange";
  //selectBtn[i].style.fontSize = ".5em";
}

// On peut aussi les selectionner en fonction de leur classe
let selectClassBox = document.getElementsByClassName("box");
console.log(selectClassBox);
selectClassBox[0].style.borderRadius = "15px";

// Selection par l'id
/*let tagh1 = document.getElementsByTagName("h1");
console.log(tagh1);*/
let selectH1Id = document.getElementById("selectH1");
console.log(selectH1Id);
selectH1Id.style.visibility = "visible";

// queryselector (quand on veut selectionner un seul element)
let gameNoticeTitre = document.querySelector("#gameNoticeTitre");
console.log(gameNoticeTitre.textContent.toUpperCase());
/*gameNoticeTitre.textContent = "Coucou";*/
gameNoticeTitre.style.textTransform = "uppercase";

// querySelectorAll -> quand plusieurs elements peuvent être sélectionnés
let firstCaracPara = document.querySelectorAll(".firstCaracPara");
console.log(firstCaracPara.length);

// J'utilise comme compteur
for (let j = 0; j < firstCaracPara.length; j++) {
  //Ici mon code
  firstCaracPara[j].style.color = "#3333";
  firstCaracPara[j].style.fontSize = "2rem";
}
