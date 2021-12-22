"use strict";
/*
 * EN HAUT LES VARIABLES
 *
 *
 *
 */
let questionContainer = document.querySelector(".click_event");
console.log(questionContainer);
let btn1 = document.querySelector("#btn-1");
console.log(btn1);
let btn2 = document.querySelector("#btn-2");
console.log(btn2);
// La reponse
let reponse = document.querySelector(".reponse");
console.log(reponse);
// Pour le mousemove
let mouseMove = document.querySelector("#mouseMove");
console.log(mouseMove);
/*
 *
 *
 *
 */
// J'écoutel'action du user sur la boite de ma question
questionContainer.addEventListener("click", function () {
  console.log("Je clique sur ma boite de ma question");
});

//questionContainer.addEventListener("click",function() => {
//    // mon code ici
//})

// Je crée une fonction
function maFonction() {
  console.log("Ma fonction est click");
}
//Je déclenche ma fonction quand l'user clique sur la boite de la question
questionContainer.addEventListener("click", maFonction());

btn1.addEventListener("click", function () {
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponse2.style.display = "block";
  reponse2.style.visibility = "visible";
  questionContainer.style.background = "red";
});

btn2.addEventListener("click", function () {
  reponse.style.visibility = "visible";
  reponse.style.display = "block";
  reponse2.style.display = "none";
  reponse2.style.visibility = "hidden";
  questionContainer.style.background = "green";
});

// event =
window.addEventListener("mousemove", function (event) {
  // On recupere l'event
  console.log(event);
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

// MOUSEUP et MOUSEDOWN

// MOUSEDOWN
window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%,-25%)";
});

// MouseUP
window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%,-50%)";
});
