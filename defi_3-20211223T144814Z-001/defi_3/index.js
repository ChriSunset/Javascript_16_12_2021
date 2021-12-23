"use script";

const changeTitle = document.querySelector("#title");
console.log(changeTitle);

function changeTitle() {
  cpt = ++cpt;

  if (cpt <= n) {
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
}
/*

1

let checkbox = document.querySelector("#checkbox");

2

// console.log(checkbox);

3

let input = document.querySelector("#input");

4

// console.log(input);

5

let display = document.querySelector("#display");

6

console.log(display);

7

​

8

checkbox.addEventListener("click", function () {

9

  console.log("je click");

10

  if (checkbox.checked == true) {

11

    // console.log("la case est checked");

12

    input.setAttribute("type", "");

13

    display.textContent = "show";

14

  } else {

15

    // console.log("la case n'est pas checked");

16

    input.setAttribute("type", "password");

17

    display.textContent = "hide";

18

  }

19

});

20

--------------------------------------------------------

21

let n = 5; //nombre final du compteur

22

let cpt = 1; //debut du compteur

23

// let duree = 3; //durée en seconde

24

// let delta = Math.ceil((duree * 1000) / n); //calcul intervalle de temps entre chaque rafraichissement

25

const title = document.getElementById("title");

26

​

27

function changeTitle() {

28

  cpt = ++cpt;

29

​

30

  if (cpt <= n) {

31

    console.log(cpt);

32

    // if count > 5 count = 0

33

    // for (count; count < 5; count++) {

34

    //  console.log(count);

35

    // }

36

    switch (cpt) {

37

      // salut

38

      case 1:

39

        title.innerHTML = "Salut!";

40

        break;

41

      // je suis designer web

42

      case 2:

43

        title.innerHTML = "je suis designer web";

44

        break;

45

      // je sais concevoir

46

      case 3:

47

        title.innerHTML = "je sais concevoir";

48

        break;

49

      // et développer

50

      case 4:

51

        title.innerHTML = "et développer";

52

        break;

53

      // des sites web !

54

      case 5:

55

        title.innerHTML = "des sites web !";

56

        cpt = 0;

57

        break;

58

    }

59

  }

60

  // setInterval(changeTitle, delta);

61

}

62

​

63

setInterval(changeTitle, 3000);

64

// ************************************************************************

65

​

66

// keyframes dans le css qui gèrent la fluidité de l'animation.

67

// Il suffit de faire une série de condition pour chaque cas et de remplacer le texte dans le HTML,

68

// on peut le faire avec switch mais aussi avec une variable

69

// compteur qu'on incrémente et des if/else if/else. Plutôt que innerHTML,

70

// vous pouvez utiliser innerText pour modifier le texte.

71

​

©2020 Sharemycode - a propos
codelist
notes

 */
setInterval(changeTitle, 3000);
