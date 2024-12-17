// chiedere il numero dei chilometri ;
// chiedere l'età;
// calcolare il prezzo totale;
// calcola lo sconto per minorenni;
// calcola lo sconto per over 65;


// Dati
let prezzo = 0.21;
const scontoMin = 20;
const scontoMax = 40;

// Prompt
let eta = prompt("Inserisci l'eta");
let chilometri = prompt("Inserisci i chilometri");

console.log(eta);
console.log(chilometri);

// Calcoli

let somma = prezzo * chilometri;

console.log(somma + " " + "€");

let scontOne = somma * scontoMin / 100;

let scontTwo = somma * scontoMax / 100;

console.log(scontOne);
console.log(scontTwo);


if (eta < 18) {
    console.log(somma - scontOne + " " + "€");
} else if (eta > 65) {
    console.log(somma - scontTwo + " " + "€");
}





