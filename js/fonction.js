"use script";
// On déclare une fonction avec le mot function
function avance_Vers_Le_Nord() {
  // Ici, on met le code
  console.log("Je pars vers le Nord !");
  console.log("Je fais 10 km.");
}
// On fait appel à la fonction
avance_Vers_Le_Nord();
avance_Vers_Le_Nord();
avance_Vers_Le_Nord();

// Function nom(argument){}
// On peut mettre plusieeurs arguments dans nos fonctions
function avance_Vers_Ouest(distanceDeMarche, gourde) {
  console.log("Je pars vers l'ouest !");
  console.log("Je fais " + distanceDeMarche + " km");
  console.log("Je bois à ma gourde rempli de " + gourde);
}

avance_Vers_Ouest(15, "cafe");
avance_Vers_Ouest(40, "chocolat chaud");
let contenu = "du coca";
avance_Vers_Ouest(25, contenu);
