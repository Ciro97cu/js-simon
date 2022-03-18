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

// ~~~~~~~~~~ END FUNCTIONS ~~~~~~~~~~



const buttonPlay = document.getElementById("button-start");

buttonPlay.addEventListener("click", () => {
})