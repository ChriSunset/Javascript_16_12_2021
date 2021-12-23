"use strict";

let checkbox = document.querySelector("#checkbox");
// console.log(checkbox);
let input = document.querySelector("input");
let display = document.querySelector("display");

checkbox.addEventListener("click", function () {
  console.log("Je click");
  if (checkbox.checked == true) {
    console.log("La case est checked !");
    input.setAttribute("type", "");
  } else {
    console.log("La case n'est pas checked !");
    input.setAttribute("type", "password");
  }
});

/*
document.getElementById("checkbox").addEventListener("click", function () {
  // switch le type de password a rien
  let caseCoche = "";
  // si la case de la checkbox est coché
  if (document.getElementById("checkbox").checked == true) {
    // change le type de l'input password en ""
    document.getElementById("input").setAttribute("type", caseCoche);
    document.getElementById("display").innerHTML = "show";
    console.log(display);
  } else {
    document.getElementById("input").setAttribute("type", "password");
    document.getElementById("display").innerHTML = "hide";
    console.log(display);
  }
});*/
