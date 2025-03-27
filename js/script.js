// MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// creo le variabili utili 
const form = document.querySelector("form");
const button = document.getElementById("button");

// variabili che contengono l'output che vedrà il cliente sul recap
const distanceOutput = document.getElementById("distanceOutput");
const ageOutput = document.getElementById("ageOutput");
const nameOutput = document.getElementById("nameOutput");
const priceOutput = document.getElementById("priceOutput")

// creo l'evento con soggetto tutto il form
form.addEventListener("submit", function(event) {

    // non permette il ricaricarsi della pagina quando si preme il bottone
    event.preventDefault();

    // variabili che contengono il valore di input inserito dal cliente
    const distanzaTot = document.getElementById("distanzaInput").value;
    const passengerAge = document.getElementById("etàInput").value;
    const nominativo = document.getElementById("nominativoInput").value;
    // costo del tragitto in km
    let priceKm = 0.21;
    // creo la formula che mi permette di calcolare il totale da pagare
    let prezzoIntero = (parseInt(priceKm * distanzaTot));
    let prezzoTotale = prezzoIntero;

    if (passengerAge<18) {
        prezzoTotale = (prezzoIntero-( 20/100 ))
    } 
    else if (passengerAge>65){
        prezzoTotale = (prezzoIntero-( 40/100 ))
    }
    else{
        prezzoTotale = prezzoIntero
    }
    // stampo sul recap
    nameOutput.innerHTML = nominativo;
    distanceOutput.innerHTML = distanzaTot;
    ageOutput.innerHTML = passengerAge;
    priceOutput.innerHTML = prezzoTotale;
});
