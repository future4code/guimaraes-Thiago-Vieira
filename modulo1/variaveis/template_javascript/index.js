// Exercícios de interpretação de código

// Exercício 1

let a = 10 // a recebe o valor 10
let b = 10 // b recebe o valor 10

console.log(b) // console imprime o valor "10"

b = 5 // b recebe o valor 5

console.log(a, b) // console imprime "10 5"

// Exercício 2

let a = 10 // a recebe o valor 10
let b = 20 // b recebe o valor 20
c = a // c recebe o valor de a = 10
b = c // b recebe o valor de c = 10
a = b // a recebe o valor de b = 10

console.log(a, b, c) // console imprime "10 10 10"

// Exercício 3

let p = prompt("Quantas horas você trabalha por dia?") // alterar variável "p" para "horasTrabalhadas"
let t = prompt("Quanto você recebe por dia?") // alterar variável "t" para "reaisPorDia" ou "reaisDia"
alert(`Voce recebe ${t/p} por hora`) // alert(`Voce recebe ${reaisDia/horasTrabalhadas} por hora`)