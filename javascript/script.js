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
    return arrayNumbers;
}

function displayNone(array) {
    numbersOnHtml.innerText = "Ora inserisci i numeri che hai visto";
    setTimeout(request, 1000, array);
}

function request(array) {
    arrayNumbers = array;
    console.log(arrayNumbers);
    arrayUser = [];
    for (let i = 0; i < numeberToGenerate; i++) {
        userInputNumber = parseInt(prompt("Inserisci uno per volta i numeri visti in precedenza"));
        if (arrayNumbers.includes(userInputNumber)) {
            arrayUser.push(userInputNumber);
        }

    }
    console.log(arrayUser);
    if (arrayUser.length === 5) {
        numbersOnHtml.innerText = `Hai indovinato tutti i numeri ${arrayUser}`;
    } else {
        numbersOnHtml.innerText = `Ritenta hai indovinato ${arrayUser.length} ovvero: ${arrayUser}`;
    }


}

// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

const buttonPlay = document.getElementById("button-start");
const numbersOnHtml = document.getElementById("my_numbers");
let arrayNumbers = [];
const numeberToGenerate = 5;
let userInputNumber;
let arrayUser = [];

buttonPlay.addEventListener("click", () => {

    const returnArray = creationAndDisplayNumbers();
    setTimeout(displayNone, 5000, returnArray);

})