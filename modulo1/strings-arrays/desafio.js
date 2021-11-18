// Desafio 1

const frase = prompt('Digite uma frase qualquer: ')

let fraseArray = frase.split(' ');

console.log(fraseArray);

// Desafio 2

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const valor = frutas.find(element => element === 'Abacaxi');

console.log(frutas.indexOf('Abacaxi', 0));