"use strict";

// Affectation après addition
let a = 10;
let b = 5;
let addition = b + a; // 15
console.log(addition);
a = a + b; // a -> 15
console.log(a); //15
a += b; //15 + 5 -> 20 donc a = 20
console.log(a);

// Affectation après soustraction
//a=20 b=5
a -= b; //15
console.log("a est egale à : " + a); //15

// Affectation après multiplication
let multiplication = a * b; // 15 * 5 -> 75
console.log(multiplication);
a *= b;

console.log(a); // 75

// Affectation après division
let division = a / b;
console.log(division); // 15
a /= b;
console.log(a); // 15

// Affectation du reste -> modulo %
let c = 3;
let d = 10;
let e = 9;
let reste = d % c; // 10 % 3 -> 1
console.log(reste); // 1
let reste2 = e % c;
console.log(reste2);

// Affectation après puissance
let puissance = d ** c; // 10 puissance 3
console.log("Le résultat est : " + puissance);

// Incrémentation
let total = 10;
total++; // total + 1 -> 11
console.log(total);

// Décrémentation
total--; // total - 1 -> 10
console.log(total);
