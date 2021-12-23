"use script";

let changeTitle = document.querySelector("#title");
console.log(changeTitle);

for (let cpt = 1; cpt < 6; cpt++) {
  switch (cpt) {
    case 1:
      title.innerHTML = "Salut !";
      break;

    case 2:
      title.innerHTML = "je suis web designer";
      break;

    case 3:
      title.innerHTML = " je sais concevoir";
      break;

    case 4:
      title.innerHTML = "et developper";
      break;

    case 5:
      title.innerHTML = "des sites web !";
      cpt = 0;
      break;
  }
}
/*
 */
setInterval(changeTitle, 3000);
