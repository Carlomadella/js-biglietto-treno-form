// MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// creo le variabili utili 
const form = document.querySelector("form");
const button = document.getElementById("button");

const distanceOutput = document.getElementById("distanceOutput");
const ageOutput = document.getElementById("ageOutput");
const nameOutput = document.getElementById("nameOutput");
const priceOutput = document.getElementById("priceOutput");

form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const distanzaTot = document.getElementById("distanzaInput").value;
    const passengerAge = document.getElementById("etàInput").value;
    const nominativo = document.getElementById("nominativoInput").value;
    let priceKm = 0.21;

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

    nameOutput.innerHTML = nominativo;
    distanceOutput.innerHTML = distanzaTot;
    ageOutput.innerHTML = passengerAge;
    priceOutput.innerHTML = prezzoTotale;
});


