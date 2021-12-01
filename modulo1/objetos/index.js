// Exercícios de interpretação de código
// 1.a)

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) // Mateus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
console.log(filme.transmissoesHoje[2]) // canal: "Globo", horario: "14h"

// 2.a)

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) // nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) // nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga) // nome: "Jubo", idade: 3, raca: "SRD"

// b) O espalhamento (ou spread) copia todas as informações do objeto selecionado.

// 3. a)

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) // false
console.log(minhaFuncao(pessoa, "altura")) // undefined

// b) Para o primeiro console.log, foi impresso "false" pois uma maneira de acessar
//    a propriedade do objeto é através do comando **objeto[nomeDaPropriedade]**.
//    
//    Para o segundo console.log foi impresso "undefined", pois a propriedade "altura"
//    não existe no objeto.

// Exercícios de escrita de código

// 1. a)

const apelidos = {
    nome: "Thiago",
    apelidos: ["Thi", "Boi", "Batata"]
}

function newFunction(object)
{
    console.log("Meu nome é "+apelidos.nome+", mas pode me chamar de: "+apelidos.apelidos[0]+", "+apelidos.apelidos[1]+" ou "+apelidos.apelidos[2]+".");
}
// Exercícios de escrita de código

// 1. a)
// b)

const novosApelidos = {
    ...apelidos,
    nome: "Bárbara",
    apelidos: ["Bola", "Sorriso", "Babi"]
}

newFunction(novosApelidos);

// 2. a)

var objeto1 = {nome: "Pedro", idade: 32, profissao: "Engenheiro"};
var objeto2 = {nome: "Thiago", idade: 26, profissao: "Programador"};

function newFunction2(objeto1, objeto2)
{
  var newArray = [];
  newArray[0] = objeto1.nome + ', ' + objeto2.nome;
  newArray[1] = objeto1.nome.length + ', ' + objeto2.nome.length;
  newArray[2] = objeto1.idade + ', ' + objeto2.idade;
  newArray[3] = objeto1.profissao + ', ' + objeto2.profissao;
  newArray[4] = objeto1.profissao.length + ', ' + objeto2.profissao.length;
  
  
  console.log(newArray);
  return newArray;
}

// 3. a)

var carrinho = [];

// b)

var fruta1 = {nome: "Banana",  disponibilidade: true}
var fruta2 = {nome: "Mamão", disponibilidade: true}
var fruta3 = {nome: "Maçã", disponibilidade: true}

// c)

function adicionarAoCarrinho(objetoFruta)
{
  carrinho.push(objetoFruta);
}

adicionarAoCarrinho(fruta1);
adicionarAoCarrinho(fruta2);
adicionarAoCarrinho(fruta3);

console.log(carrinho);

// Desafios
// 1)

var object = {};

function cadastro(nome, idade, profissao)
{
  object = { ...object,
  nome: prompt('Qual seu nome? '),
  idade: prompt('Qual sua idade? '),
  profissao: prompt('Qual sua profissão?')
  }

  console.log(object);
  console.log(typeof object);
}