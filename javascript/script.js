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

    feedback(arrayUser);

    buttonPlay.classList.toggle("pe-none");

}

function feedback(arrayUser) {

    switch (arrayUser.length) {
        case 0:
            numbersOnHtml.classList.toggle("text-danger");
            numbersOnHtml.innerText = `Ritenta non hai indovinato nessun numero`;
            break;
        case 1:
            numbersOnHtml.classList.toggle("text-danger");
            numbersOnHtml.innerText = `Ritenta hai indovinato ${arrayUser.length} solo numero ovvero il: ${arrayUser.join(' ~ ')}`;
            break;
        case 5:
            numbersOnHtml.classList.toggle("text-primary");
            numbersOnHtml.innerText = `Hai indovinato tutti i numeri ovvero: ${arrayUser.join(' ~ ')}`;
            break;
        default:
            numbersOnHtml.classList.toggle("text-danger");
            numbersOnHtml.innerText = `Ritenta hai indovinato ${arrayUser.length} numeri ovvero: ${arrayUser.join(' ~ ')}`;
    }

}

function clock() {
    counter--;
    countDownOnHtml.innerText = `${counter} s`;
    if (counter <= 7) {
        countDownOnHtml.classList.add("text-danger")
    } else if (counter <= 15) {
        countDownOnHtml.classList.add("text-warning")
    }
    if (counter === 0) {
        clearInterval(countDown);
    }
}

function variousReset() {
    numbersOnHtml.classList.remove("text-danger");
    numbersOnHtml.classList.remove("text-primary");
    countDownOnHtml.classList.remove("text-warning")
    countDownOnHtml.classList.remove("text-danger")
    counter = 30;
}

// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

const buttonPlay = document.getElementById("button-start");
const numbersOnHtml = document.getElementById("my_numbers");
const countDownOnHtml = document.getElementById("my_counter");
let arrayNumbers = [];
const numeberToGenerate = 5;
let userInputNumber;
let arrayUser = [];
let counter = 30;
let countDown;

buttonPlay.addEventListener("click", () => {
    variousReset();
    countDownOnHtml.innerText = `${counter} s`;
    const returnArray = creationAndDisplayNumbers();
    countDown = setInterval(clock, 1000);
    setTimeout(displayNone, 30000, returnArray);

})