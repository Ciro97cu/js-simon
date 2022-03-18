/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati. */

// ~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~
function generatorRandomNumber(min, max) {
    range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

function creationAndDisplayNumbers() {
    let arrayNumbers = [];
    for (let i = 0; i < numeberToGenerate; i++) {
        let numbers = generatorRandomNumber(1, 50);
        while (arrayNumbers.includes(numbers)) {
            numbers = generatorRandomNumber(1, 50);
        }
        arrayNumbers.push(numbers);
    }
    console.log(arrayNumbers);
    numbersOnHtml.innerText = arrayNumbers;
}

function displayNone() {
    numbersOnHtml.innerText = "Ora inserisci i numeri che hai visto";
    setTimeout(request, 1000);
}

function request() {
    userInputNumber = parseInt(prompt("Inserisci uno per volta i numeri visti in precedenza"));
}

// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

const buttonPlay = document.getElementById("button-start");
const numbersOnHtml = document.getElementById("my_numbers");
let arrayNumbers = [];
const numeberToGenerate = 5;
let userInputNumber;

buttonPlay.addEventListener("click", () => {

    creationAndDisplayNumbers();
    setTimeout(displayNone, 5000);

})
