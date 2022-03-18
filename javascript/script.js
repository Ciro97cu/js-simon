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
    buttonPlay.classList.toggle("pe-none");
    let arrayNumbers = [];
    for (let i = 0; i < numeberToGenerate; i++) {
        let numbers = generatorRandomNumber(1, 50);
        while (arrayNumbers.includes(numbers)) {
            numbers = generatorRandomNumber(1, 50);
        }
        arrayNumbers.push(numbers);
    }
    console.log(arrayNumbers);
    numbersOnHtml.innerText = arrayNumbers.join(' ~ ');
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

        do {
            userInputNumber = parseInt(prompt(`${i + 1}ᴬ Scelta - Inserisci uno per volta i numeri visti in precedenza`));
        } while (isNaN(userInputNumber) || !userInputNumber);
        if (arrayNumbers.includes(userInputNumber) && !arrayUser.includes(userInputNumber)) {
            arrayUser.push(userInputNumber);
        }

    }
    console.log(arrayUser);

    switch (arrayUser.length) {
        case 0:
            numbersOnHtml.innerText = `Ritenta non hai indovinato nessun numero`;
            break;
        case 1:
            numbersOnHtml.innerText = `Ritenta hai indovinato ${arrayUser.length} solo numero ovvero il: ${arrayUser.join(' ~ ')}`;
            break;
        case 5:
            numbersOnHtml.innerText = `Hai indovinato tutti i numeri ovvero: ${arrayUser.join(' ~ ')}`;
            break;
        default:
            numbersOnHtml.innerText = `Ritenta hai indovinato ${arrayUser.length} numeri ovvero: ${arrayUser.join(' ~ ')}`;
    }
    buttonPlay.classList.toggle("pe-none");

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