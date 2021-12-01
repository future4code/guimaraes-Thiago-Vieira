// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
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
  let altura = Number(prompt('Digite um valor para a altura do retângulo: '));
  let largura = Number(prompt('Digite um valor para a largura do retângulo: '));

  let area = altura * largura;

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('Digite o ano atual: '));
  let anoNascimento = Number(prompt('Digite o ano do seu nascimento: '));

  let idade = anoAtual - anoNascimento;

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  
  imc = peso / (altura * altura)

  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  
  let nome = prompt('Digite o seu nome: ');
  let idade = prompt('Digite a sua idade: ');
  let email = prompt('Digite o seu email: ');

  console.log('Meu nome é '+nome+', tenho '+idade+' anos, e o meu email é '+email+'.');
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  
  arrayCores=[];
  arrayCores[0] = prompt('Digite uma cor favorita: ');
  arrayCores[1] = prompt('Digite uma cor favorita: ');
  arrayCores[2] = prompt('Digite uma cor favorita: ');

  console.log(arrayCores);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let resultado = custo / valorIngresso;

  return resultado;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  let teste = string1.length === string2.length;

  return teste;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  arrayTemp1 = array[0];
  arrayTemp2 = array[array.length - 1];
  array[0] = arrayTemp2;
  array[array.length - 1] = arrayTemp1;

  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let teste = string1.toLowerCase() === string2.toLowerCase();

  return teste;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt('Digite o ano atual'));
  let anoNascimento = Number(prompt('Digite o ano de nascimento'));
  let emissaoRG = Number(prompt('Digite o ano de emissão de seu RG'));
  
  let idade = anoAtual - anoNascimento;
  let testeRG = emissaoRG - anoNascimento;

  let teste;

  if (idade <= 20 && testeRG % 5 === 0)
  {
    teste = true;
    console.log(teste);
    //console.log('Você deve renovar seu RG');
  }
  
  else if ((idade > 20 && idade <= 50) && testeRG % 10 === 0)
  {
    teste = true;
    console.log(teste);
    //console.log('Você deve renovar seu RG');
  }
  
  else if (idade > 50 && testeRG % 15 === 0)
  {
    teste = true;
    console.log(teste);
    //console.log('Você deve renovar seu RG');
  }
  
  else
  {
    teste = false
    console.log(teste);
    //console.log('Seu RG é válido!');
  } 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

  let ano1 = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0

  return ano1;

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  let maioridade = prompt('Você é maior de 18 anos?')
  let ensinoMedio = prompt('Você possui ensino médio completo')
  let disponibilidade = prompt('Você possui disponibilidade durante os horários do curso?')
  
  if (maioridade.includes('n') || ensinoMedio.includes('n') || disponibilidade.includes('n'))
  {
    teste = false;
  }

  else
  {
    teste = true;
  }

  console.log(teste);

}