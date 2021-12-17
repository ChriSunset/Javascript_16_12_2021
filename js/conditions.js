"user strict";

let xCondition = 2; // number
let yCondition = 3; // number
let wCondition = "2"; // string
let zCondition = 3; // number

// test si xCondition est plus petit que yCondition
if (xCondition < yCondition) {
  console.log("xCondition est inférieur à yCondition");
}
// test si xCondition est plus grand que yCondition
if (xCondition > yCondition) {
  console.log("yCondition est inférieur à xCondition");
} else {
  console.log("xCondition est inférieur à yCondition");
}

// test si xCondition existe bien.
if (zCondition) {
  console.log("Ma variable zCondition existe !");
}
// Quand ma variable a comme valeur null la condition est false
let aCondition = null;
if (aCondition) {
  console.log("Ma variable aCondition existe !");
}

//test si xCondition est different de 3
if (xCondition != 3) {
  console.log("xCondition est différent de 3");
}

// test d'égalité
if (xCondition == wCondition) {
  console.log("ils sont égaux mais pas en typage une string et un nombre");
}

// test d'égalité strict
if (xCondition === zCondition) {
  console.log("Ils sont strictement égaux en valeur et en typage");
}

//Test si l'une des conditions est vraie
if (xCondition == 2 || yCondition == 2) {
  console.log("L'un des deux est vrai !");
}

// Si les deux sont réel
if (xCondition === 2 && wCondition == 2) {
  console.log("Les deux sont vrai");
}

// On peut faire un if sur une seule ligne s'il n'y a qu'une instruction
if (xCondition == 2 && wCondition == 2) {
  console.log("Les deux sont à nouveau vrai");
}

// une autre façon d'écrire un if -> les ternaires
// Si vrai alors instruction : sinon (else)
// ? -> est ce que ma condition est vrai alors j'exécute le code après le ?
// : -> else et le code qui correspond au else
xCondition != yCondition
  ? console.log("Ils sont différents")
  : console.log("Ils sont identiques");

/******************  Switch *********************/
let fruit = "pomme";
fruit = "poire";
fruit = "cerise";
switch (fruit) {
  case "pomme":
    console.log("C'est une pomme !");
    break;
  case "poire":
    console.log("C'est une poire !");
    break;

  default:
    console.log("Ce n'est ni une pomme, ni une poire !");
}
