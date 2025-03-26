let journeyLenght = parseInt(prompt("Indica i kilometri che vuoi percorrere con questo treno?"));
let passengerAge = parseInt(prompt("Indica l'età del passengero"));
let priceKm = 0.21;

// console.log(journeyLenght)
// console.log(passengerAge)

let prezzoIntero = (parseInt(priceKm * journeyLenght));
let prezzoTotale = prezzoIntero;
// console.log("Il prezzo finale è di", prezzoTotale, "€");

if (passengerAge<18) {
    prezzoTotale = (prezzoIntero-( 20/100 ))
    // console.log("Il prezzo del biglietto è scontato del 20%, perciò il totale sarà di", prezzoTotale, "€")
} 
else if (passengerAge>65){
    prezzoTotale = (prezzoIntero-( 40/100 ))
    // console.log("Il prezzo del biglietto è scontato del 40%, perciò il totale sarà di", prezzoTotale, "€")
}
else{
    prezzoTotale = prezzoIntero
}

prezzoTotale = (prezzoTotale).toFixed(2); 

console.log("Il prezzo totale da pagare è di", prezzoTotale, "€")