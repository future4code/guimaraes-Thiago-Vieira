// //Exercícios de interpretação de código
// // 1

// //atribui o valor de 0 para valor
// let valor = 0

// //loop que adiciona o valor de "i" a variavel "valor"
// for(let i = 0; i < 5; i++) {
//   valor += i
// }

// //imprime o valor da variavel "valor" no console
// console.log(valor)

// // 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// //loop que verifica se o numero e maior do que 18. Caso positivo, imprime
// //o numero no console
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// //b) Não é possível acessar o índice do elemento com o for...of;

// // 3

// //prompt que recebe um numero e armazena na variavel "quantidadeTotal"
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))

// let quantidadeAtual = 0

// //loop que funciona enquanto quantidadeAtual atingir o input dado
// //pelo usuario
// while(quantidadeAtual < quantidadeTotal)
// {
//   let linha = ""
  
//   //loop que adiciona um asterisco por iteracao
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }

//   //imprime o valor de linha com os asteriscos no console
//   console.log(linha)
//   //adiciona 1 ao contador
//   quantidadeAtual++
// }