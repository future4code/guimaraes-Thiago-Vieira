//Exercícios de interpretação de código
// 1

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) { // se o número for par (módulo por 2 = 0)
  console.log("Passou no teste.") // passa no teste
}
else { //se não for par
  console.log("Não passou no teste.") // não passa no teste 
}

//2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para retornar ao usuário o valor da fruta escolhida;
//b) R$ 2.25;
//c) 


//3)

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
    let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

//a) A primeira linha recebe um número do usuário.
//b) Para numero = 10, o programa vai imprimir no console
//   a mensagem "esse número passou no teste", e a variável
//   mensagem vai receber a string "Essa mensagem é secreta!!!".
//   Entretanto, ela não vai ser exibida no console, pois está
//   declarada dentro do escopo de "if"
//   Caso o número fosse -10, nada aconteceria, pois fora do escopo
//   da condicional "if" não há nada.

// Exercícios de escrita de código

//1

let idade = Number(prompt("Digite sua idade: "))

if (idade >= 18)
{
  console.log("Você pode dirigir.")
}
else
{
  console.log("Você não pode dirigir.")
}

//2

let horario = prompt("Digite o código de seu turno de estudo (M/V/N): ")

if (horario === "M")
{
  console.log("Bom dia!")
}

else if (horario === "V")
{
  console.log("Boa tarde!")
}

else
{
  console.log("Boa noite!")
}

//3

let horario = prompt("Digite o código de seu turno de estudo (M/V/N): ")

switch (horario)
{
  case "M":
    console.log("Bom dia!")
  break;

  case "V":
    console.log("Boa tarde!")
  break;

  case "N":
    console.log("Boa noite!")
  break;

  default:
    console.log("Horário inválido!")
}

//4

let filme = prompt("Digite o gênero do filme: ");
let ingresso = Number(prompt("Digite o valor do ingresso: "));

if (filme === "fantasia" && ingresso <= 15)
{
  console.log("Bom filme!");
}

else
{
  console.log("Escolha outro filme :(")
}