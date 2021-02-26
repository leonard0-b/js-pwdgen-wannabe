// Chiedi il nome
var nome = prompt("Inserisci il tuo nome");

console.log(nome);

// chiedi cognome
var cognome = prompt("Inserisci cognome");

console.log(cognome);

// chiedi colore
var colore = prompt("Qual è il tuo colore preferito?");

console.log(colore);

document.getElementById('name').innrHTML = nome + "!";

document.getElementById('password').innerHTML = nome + cognome + colore + "21";
