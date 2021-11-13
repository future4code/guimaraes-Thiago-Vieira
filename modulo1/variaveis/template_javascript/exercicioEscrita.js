//Exercício de escrita de código 1

const nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é a sua idade?");

console.log(typeof nome, typeof idade);

// a função "prompt" devolve, por padrão, o tipo "string"

// alert("Olá, ", nome, "! Você tem", idade, "anos.")

// alert("Olá! Bom dia, "+ nome)

alert("Olá, " + nome + ". Você tem " + idade + " anos.");
console.log("Olá,",nome,"! Você tem", idade, "anos.");

//Exercício de escrita de código 2

let nacionalidade = prompt("Você é estrangeiro?");
let camisa = prompt("Você está usando preto hoje?");
let ingles = prompt("Você fala inglês fluente?");

alert(
    "Você é estrangeiro? R: " + nacionalidade +
    "\nVocê está usando preto hoje? R: " + camisa +
    "\nVocê fala inglês fluente? R: " + ingles
)

//Exercício de escrita de código 3

let a = 10;
let b = 25;
let temp;

temp = a;
a = b;
b = temp;

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
