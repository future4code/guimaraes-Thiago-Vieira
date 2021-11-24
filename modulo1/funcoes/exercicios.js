// Exercícios de escrita de código
//1) a)

function imprimirTexto()
{
   let nome = prompt('Digite seu nome: ');
   let idade = Number(prompt('Qual sua idade? '));
   let cidade = prompt('Qual sua cidade? ');
   let profissao = prompt('Qual sua profissão? ');

	console.log('Eu sou '+nome+', tenho '+idade+' anos, moro em '+cidade+' e sou '+profissao+'.');
}

//   b)

function texto2 (nome, idade, cidade, profissao)
{
	idade = Number(idade);
	return console.log('Eu sou '+nome+', tenho '+idade+' anos, moro em '+cidade+' e sou '+profissao+'.');
}

//2) a)

function somatorio(num1, num2)
{
   let resultado = num1 + num2;
   return resultado;
}

console.log(somatorio());

// b)

function comparativo(num1, num2)
{
   let resultado = num1 >= num2;
   return resultado;
}

// c)

function parOuImpar(num)
{
   let resultado = (num % 2 === 0);
   return resultado;
}

// d)

function tamanho(string)
{
   console.log(string.length);
   console.log(string.toUpperCase());

}

//3)

function soma(num1, num2)
{
   let soma = num1 + num2;
   console.log(soma);
}

function subtracao(num1, num2)
{
   let subtracao = num1 - num2;
   console.log(subtracao);
}

function multiplicacao(num1, num2)
{
   let multiplicacao = num1 * num2;
   console.log(multiplicacao);
}

function divisao(num1, num2)
{
   let divisao = num1 / num2;
   console.log(divisao);
}

let teste1 = Number(prompt('Digite um número (1/2): '))
let teste2 = Number(prompt('Digite um número (2/2): '))

soma(teste1, teste2);
subtracao(teste1, teste2);
multiplicacao(teste1, teste2);
divisao(teste1, teste2);

// Desafio 1
// a)

const imprime = (nome) => console.log(nome);

// b)

let funcao = (valor1, valor2) => { valor1 + valor2 };

// Desafio 2

function pitagoras(cat1, cat2)
{ 
   let hipotenusa = Math.sqrt((cat1 ^ 2) + (cat2 ^ 2));
   return hipotenusa;
}

console.log(pitagoras());