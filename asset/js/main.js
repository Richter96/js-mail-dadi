/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Mail Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
 */

// MAIL

//dichiaro le costanti che mi servono.
const btnVerificaEl = document.getElementById('verifica')
const esitoVerifica = document.getElementById('esito_verifica')

//creiamo un array con alcune mail.
const dataMail = [
    "ciao",
    "casa@gmail.com",
    "auto@gmail.com",
    "banca@gmail.com",
    "finestra@gmail.com",
]

// assegno una funzione al bottone
btnVerificaEl.addEventListener('click', function () {

//prendo l'indirizzo mail dell'utente
    const userEmail = document.getElementById('user_email').value;

// stampo l'email per controllo
// console.log(userEmail);

// dichiaro una variabile (è un concetto di ragionamento) falsa che cambia nel momento si verifa una condizione
    let hasAcces = false

// creo un loop che conti gli array
    for (let i = 0; i < dataMail.length; i++) {

// stampo gli array per un controllo
// console.log`(email inserita: ${userEmail} email loop${dataMail[i]})`

//creo un modo per bloccare il loop e rimuovere la condizione if fuori dal loop
        if (dataMail[i] === userEmail) {
           hasAcces = true
        }
    }

// scrivo solo hasAcces xk si da scontato che sia true
    if (hasAcces) {
        esitoVerifica.innerHTML = 'puoi accedere'
    } else {
        esitoVerifica.innerHTML = 'non puoi accedere'
    }
})


/* Gioco dei dadi
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
Buon divertimento e confermate lettura come al solito :baby-yoda:
 */

// generiamo dei numeri random da 1 a 6 per il giocatore e poi per il pc
// generiamo un numero a caso 
// usia un if per capire se due condizioni sono uguali.


const pcNumRandom = Math.floor(Math.random() * 6) + 1
console.log(`numermi random pc: ${pcNumRandom}`)


const userNumRandom = Math.floor(Math.random() * 6) + 1
console.log(`numermi random user: ${userNumRandom}`)


if (pcNumRandom > userNumRandom) {
    console.log('Pc ha vinto!!!')
} else {
    console.log('User ha vinto');
}







