"use strict";
/*
 *
 * Inserer avec un h1 centré
 * main avec 2 sections
 * un titre pour chaque section
 * dans chaque section un paragraphe
 * au moins une image dans la section
 *
 * footer / mention légal et confidentialité 2 liens a centré
 *
 *
 *
 */

let selectH2 = document.getElementsByTagName("h2");
console.log(selectH2);
selectH2[0].style.color = "orange";

let b = document.body;
let insertH1 = document.createElement("h1");
let text01 = document.createTextNode("wsthsthdthsdyjdtyhjdt");

/*********  Inserer H1 ********/
insertH1.textContent = "Ma boutique personnelle";

b.prepend(insertH1);
b.append(text01);

text01.remove();

/*********  Effacer main  *********/
let delMain = document.querySelector("main");
console.log(delMain);

delMain.remove();

/*********  Creer nouveau main  *********/
let insertMain = document.createElement("main");
let newSection1 = document.createElement("section1");
let newH1 = document.createElement("h1");

newH1.textContent = "Ma boutique de maquettes en ligne.";
newH1.style.textAlign = "center";
let newSection2 = document.createElement("section2");

b.append(insertMain);
b.append(newH1);
b.appendChild(newSection1);
b.appendChild(newSection2);
