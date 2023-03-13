/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon divertimento e confermate lettura come al solito :baby-yoda: */

// MAIL

//chiediamo con prompt/input mail all'utente

//creiamo un array con alcune mail.
let dataMail = [
    "ciao",
    "casa@gmail.com",
    "auto@gmail.com",
    "banca@gmail.com",
    "finestra@gmail.com",
]
console.log(dataMail)

//chiedo l'indirizzo mail dell'utente
const userEmail = prompt('inserisci la tua mail')
console.log(userEmail, dataMail)

// creo un loop che conti gli array
for (let i = 0; i < dataMail.length; i++) {
// stampo gli array
// console.log(dataMail[i])
if (dataMail[i] == userEmail) {
    console.log('puoi accedere!!!')
    
} else if (dataMail[i] != userEmail) {
    console.log('non puoi accedere')
}
}

