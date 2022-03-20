/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali
dei numeri da indovinare sono stati individuati. */

// ~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~
// funzione per generare numeri random in base ad un range personalizzabile
function generatorRandomNumber(min, max) {
    range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}

// funzione per creare il mio array e riempirlo con 5 numeri
function creationAndDisplayNumbers() {
    // mi assicuro che l'utente non possa ripremere sul bottone gioca
    buttonPlay.classList.toggle("pe-none");
    // creo il mio array vuoto
    let arrayNumbers = [];
    /* vado a riempire il mio array con 5 numeri e mi assicuro
    anche che non ci siano numeri duplicati al suo interno */
    for (let i = 0; i < numeberToGenerate; i++) {
        let numbers = generatorRandomNumber(1, 50);
        while (arrayNumbers.includes(numbers)) {
            numbers = generatorRandomNumber(1, 50);
        }
        arrayNumbers.push(numbers);
    }
    // stampo a schermo e in console i numeri appena generati
    console.log(arrayNumbers);
    numbersOnHtml.innerText = arrayNumbers.join(' ~ ');
    // ritorno l'array per utilizzarlo nella funzione request
    return arrayNumbers;
}

/* funzione per far scomparire i numeri dallo schermo e
ritardare l'avvio del prompt */
function displayNone(array) {
    numbersOnHtml.innerText = "Ora inserisci i numeri che hai visto";
    setTimeout(request, 1000, array);
}

// funzione per chiedere i numeri all'utente
function request(array) {
    // riprendo il valore del mio array di numeri random
    arrayNumbers = array;
    // creo un array di numeri dell'utente
    arrayUser = [];
    /* vado a chiedere i numeri all'utente ed uno alla volta verifico se sono
    presenti nell'array di numeri random e anche se sono già presenti
    nello stesso array dei numeri inseriti dall'utente */
    for (let i = 0; i < numeberToGenerate; i++) {
        do {
            userInputNumber = parseInt(prompt(`${i + 1}ᴬ Scelta - Inserisci uno per volta i numeri visti in precedenza`));
        } while (isNaN(userInputNumber) || !userInputNumber);
        if (arrayNumbers.includes(userInputNumber) && !arrayUser.includes(userInputNumber)) {
            arrayUser.push(userInputNumber);
        }
    }
    console.log(arrayUser);
    // richiamo la funzione per dare il feedback all'utente
    feedback(arrayUser);
    // rimuovo il blocco dal bottone gioca precedentemente impostato
    buttonPlay.classList.toggle("pe-none");
}

// funzione per dare un feedback all'utente
function feedback(arrayUser) {
    // condizione switch che in base ai casi avrà un commento personalizzato
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
    // ogni secondo vado a decrementare la mia variabile counter di 1
    counter--;
    // stampo il mio countdown a schermo ogni decremento
    countDownOnHtml.innerText = `${counter} s`;
    /* imposto una condizione per andare a colorare il testo
    a seconda del valore della variabile countdown e poi quando ha valore
    zero fermo il counter */
    if (counter <= 7) {
        countDownOnHtml.classList.add("text-danger")
    } else if (counter <= 15) {
        countDownOnHtml.classList.add("text-warning")
    }
    if (counter === 0) {
        clearInterval(countDown);
    }
}

// funzione per eseguire tutti i reset del caso
function variousReset() {
    // reset colore testo feedback
    numbersOnHtml.classList.remove("text-danger");
    numbersOnHtml.classList.remove("text-primary");
    // reset colore countdown
    countDownOnHtml.classList.remove("text-warning");
    countDownOnHtml.classList.remove("text-danger");
    // reset valore countdown
    counter = 30;
}

// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~

// costante per il bottone start
const buttonPlay = document.getElementById("button-start");
// costante per mostrare i numeri e il feedback a schermo
const numbersOnHtml = document.getElementById("my_numbers");
// costante per mostrare il countdown a schermo
const countDownOnHtml = document.getElementById("my_counter");
// variabile di riferimento a quanti elementi vanno nell'array
const numeberToGenerate = 5;
// variabile per chiedere i numeri all'utente
let userInputNumber;
// array dei numeri inseriri dall'utente
let arrayUser = [];
// variabile counter
let counter = 30;
// variabile countdown
let countDown;

// EventListener per iniziare il gioco al click
buttonPlay.addEventListener("click", () => {
    // effettuo tutti i reset del caso richiamando la mia funzione
    variousReset();
    // mando a schermo il valore iniziale del counter
    countDownOnHtml.innerText = `${counter} s`;
    // richiamo la funzione per la creazione del mio array con numeri random
    const returnArray = creationAndDisplayNumbers();
    // faccio partire il countdown con un setInterval
    countDown = setInterval(clock, 1000);
    // faccio partire la richiesta dei numeri con il setTimeout
    setTimeout(displayNone, 30000, returnArray);
})