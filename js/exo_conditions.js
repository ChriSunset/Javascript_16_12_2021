"user strict";

/***---------------------------- Exercice -- 01
 *
 * 1 - Demander au user d'écrire une couleur primaire dans un prompt (bleu rouge jaune)
 * 2 - Tester la couleur entrée en chaine de caractère
 * 3 - Afficher dans la page "Bravo la couleur ........ est une couleur primaire !"
 * 4 - La couleur choisie n'est pas une couleur primaire
 *
 */

let couleur = prompt(
  "Ecrivez unz couleur primaire parmi le bleu, rouge ou jaune : "
).toLowerCase();

/*********** Avec If ***********/
if (
  couleur == "Bleu" ||
  couleur == "bleu" ||
  couleur == "Rouge" ||
  couleur == "rouge" ||
  couleur == "Jaune" ||
  couleur == "jaune"
) {
  document.write("Bravo la couleur " + couleur + " est une couleur primaire !");
} else {
  document.write("La couleur choisie n'est pas une couleur primaire !");
}

/*********** Avec break ***********/
switch (couleur) {
  case "bleu":
    document.write(
      "Bravo la couleur " + couleur + " est une couleur primaire !"
    );
    break;
  case "rouge":
    document.write(
      "Bravo la couleur " + couleur + " est une couleur primaire !"
    );
    break;
  case "jaune":
    document.write(
      "Bravo la couleur " + couleur + " est une couleur primaire !"
    );
    break;
  default:
    document.write("La couleur choisie n'est pas une couleur primaire !");
}
