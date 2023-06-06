// Bouton "Go"
let button = document.getElementById("button");
// Input + bouton
let form = document.getElementById("form");
// Pararaphe, ID="message"
let message = document.getElementById("message");
// Link "Recommencer"
let link = document.getElementById("link");
// méthode pour avoir un nombre random
const secretNumber = Math.floor(Math.random() * 501);


// nombre d'essai
let attempts = 3;

// Ce bloc de code fonctionne que au click sur "button"
button.onclick = function () {
  const input = document.getElementById("input");
  // Si l'input n'est pas vide
  if (input.value != "") {
    //   Si la valeur saisie est inférieur au nombres à trouver :
    if (input.value < secretNumber) {
      message.innerText = "Le nombre est plus grand que " + input.value + "";
      message.style.color = "#999";
    }
    //   Si la valeur saisie est supérieur au nombres à trouver :
    else if (input.value > secretNumber) {
      message.innerText = "Le nombre est plus petit que " + input.value + "";
      message.style.color = "#999";
    }
    // Si le nombre d'essai atteint 0 alors l'input + btn = none et link = flexc
    if (attempts == 0) {
      message.innerText =
        "T'es trop guez, il fallait trouvé " + secretNumber + " !";
      message.style.color = "red";
      form.style.display = "none";
      link.style.display = "flex";
    }
    attempts--;

    // Si le nombre à été trouver alors l'input + btn = none et link = flex

    if (input.value == secretNumber) {
      message.innerText =
        "Bravo vous avez trouvé le nombre qui est " + secretNumber + " !";
      message.style.color = "green";
      form.style.display = "none";
      link.style.display = "flex";
    }
  } else {
    // Sinon, si l'input est vide
    message.innerText = "Le champ est vide !";
    message.style.color = "red";
  }
};
