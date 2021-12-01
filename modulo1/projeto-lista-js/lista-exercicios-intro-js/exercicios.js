// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  resultado = num1 + num2;
  return resultado
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let ladoA = Number(prompt('Digite o valor do lado A do retângulo: '));
  let ladoB = Number(prompt('Digite o valor do lado B do retângulo: '));
  let areaRetangulo = ladoA * ladoB;
  console.log(areaRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Qual o ano atual? '));
  let anoNasc = Number(prompt('Qual o ano de seu nascimento? '));
  let idade = anoAtual - anoNasc;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(prompt('Qual o seu peso? '));
  altura = Number(prompt('Qual a sua altura em m? '));
  imc = peso / (altura * altura);
  console.log(imc);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt('Qual é o seu nome? ');
  idade = Number(prompt('Qual é a sua idade? '));
  email = prompt('Qual é o seu e-mail? ');
  console.log('Meu nome é '+nome+', tenho '+idade+' anos, e o meu email é '+email+'.');
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Entre sua primeira cor favorita: ");
  const cor2 = prompt("Entre sua segunda cor favorita: ");
  const cor3 = prompt("Entre sua terceira cor favorita: ");
  const coresFavoritas = [cor1, cor2, cor3];
  console.log(coresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt("Digite um texto qualquer: ");
  string = string.toUpperCase();
  console.log(string);
  return string;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = Number(prompt("Digite o custo do espetáculo: "));
  valorIngresso = Number(prompt("Digite o valor do ingresso: "));
  let resultado = custo / valorIngresso;
  console.log(resultado);
  return resultado;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Digite uma palavra: ");
  string2 = prompt("Digite outra palavra: ");
  comparativo = string1.length === string2.length;
  console.log(comparativo);
  return comparativo;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
 
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  let last = array[array.length - 1];
  return last;

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, temp, temp2) {
  // implemente sua lógica aqui
  
  temp = array[0];
  temp2 = array[array.length - 1];
  array[array.length - 1] = temp;
  array[0] = temp2;

  console.log(array);
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = Boolean(prompt("Você é maior de 18 anos? "));
  let ensinoMedio = Boolean(prompt("Você possui ensino médio completo? "));
  let disponibilidade = Boolean(prompt("Você possui disponibilidade de horários? "));
  
  console.log(idade, ensinoMedio, disponibilidade);

/*   if (idade && ensinoMedio && disponibilidade)
  {
    resultado = true;
  }

  else
  {
    resultado = false;
  } */

  // console.log(resultado)
}