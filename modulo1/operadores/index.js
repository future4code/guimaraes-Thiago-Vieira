// Exercicios de interpretacao de codigo
// 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 // resultado = true && false = false
console.log("a. ", resultado) // a. false

resultado = bool1 && bool2 && bool3 // resultado = true && false && true = false
console.log("b. ", resultado) // b. false

resultado = !resultado && (bool1 || bool2)  // !resultado = true, logo >> resultado = true && (true || false) = true
console.log("c. ", resultado) // c. true

console.log("d. ", typeof resultado) //d. boolean

// 2 e 3

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // o comando prompt devolve somente o formato string. neste caso seria necessario converter com a funcao Number();