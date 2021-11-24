// Exercícios de interpretação de código
// 1

function minhaFuncao(variavel)
{
	return variavel * 5;
}

console.log(minhaFuncao(2)) // 10
console.log(minhaFuncao(10)) // 50

// 2

let textoDoUsuario = prompt("Insira um texto: "); // Recebe string do usuário

const outraFuncao = function(texto)
{
	return texto.toLowerCase().includes("cenoura")  //Converte todo o texto pra minúsculas e adiciona a string "cenoura" ao final.
}

const resposta = outraFuncao(textoDoUsuario)

console.log(resposta) // Imprime o conteúdo de textoDoUsuario (string) + "cenoura" ao final;