//exercicios de escrita de codigo
// 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a

function somenteNome(item)
{
    return item.nome;
}

const novosPets = pets.map(somenteNome)


//b

function somenteRaca(item)
{
    return item.raca === "Salsicha";
}

const raca = pets.filter(somenteRaca)
console.log(raca)

//c

function promo(item)
{
    return item.raca === "Poodle";
}

const poodle = pets.filter(promo)

function frase(item)
{
    return 'Você ganhou um cupom de desconto de 10% para tosar o/a, '+item.nome+'!';
}

const mensagem = poodle.map(frase)

// 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a

 const apenasNome = produtos.map((item) => {

    return item.nome

})

 //b

function aplicaDesconto(item)
{
    return {nome: item.nome, preco: item.preco *= 0.95}
}

const desconto = produtos.map(aplicaDesconto)
console.log(desconto);

//c

function somenteBebidas(item)
{
    return item.categoria === "Bebidas";
}

const bebidas = produtos.filter(somenteBebidas)
console.log(bebidas);

//d

function somenteYpe(item)
{
    return item.nome === "Ypê";
}

const ype = produtos.filter(somenteYpe)
console.log(ype);

//e

function frase(item)
{
    return "Compre " + item.nome + " por apenas " + item.preco+"."
}

const construirFrase = produtos.map(frase)
console.log(construirFrase)