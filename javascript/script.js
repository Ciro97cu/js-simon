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

// function creationAndDisplayNumbers() {

// }

function timer() {
    counter += 1;
    console.log(counter);
}

// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

const buttonPlay = document.getElementById("button-start");
const numbersOnHtml = document.getElementById("my_numbers");
let arrayNumbers = [];
const numeberToGenerate = 5;
let counter = 0;

buttonPlay.addEventListener("click", () => {

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



})

let clock = setInterval(timer, 1000);
if (counter === 10) {
    clearInterval(clock);
}
