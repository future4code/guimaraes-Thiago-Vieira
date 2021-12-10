// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
   
    return array.length;

}

// EXERCÍCIO 02
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido.
function retornaArrayInvertido(array) {

    let arrayInvertido = [];
    for (i = array.length - 1; i >= 0; i--)
    {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido

}

// EXERCÍCIO 03
// Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente. 
function retornaArrayOrdenado(array) {
  
    return array.sort(function compararNumeros(a, b) {
        return a - b;
      });
    
    // var done = false;
    // while (!done)
    // {
    //   done = true;
      
    //   for (var i = 1; i < array.length; i += 1)
    //   {
    //     if (array[i - 1] > array[i])
    //     {
    //       done = false;
    //       var tmp = array[i - 1];
    //       array[i - 1] = array[i];
    //       array[i] = tmp;
    //     }
    //   }
    // }
  
    // return array;

}

// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
function retornaNumerosPares(array) {
  
    let arrayPares = [];

    for (i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            arrayPares.push(array[i]);
        }
    }

    return arrayPares;

}

// EXERCÍCIO 05
// Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
function retornaNumerosParesElevadosADois(array) {
 
    let arrayQuadrados = [];

    for (i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            arrayQuadrados.push(Math.pow(array[i], 2));
        }
    }

    return arrayQuadrados;

}

// EXERCÍCIO 06
// Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
  
    let maior = 0;

    for (i = 0; i < array.length; i++)
    {
        if (array[i] > maior)
        {
            maior = array[i];
        }
    }

    return maior;

}

// EXERCÍCIO 07
// Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:
// - `maiorNumero` → contém o maior número
// - `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
// - `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)
function retornaObjetoEntreDoisNumeros(num1, num2) {

    let objeto = {
        maiorNumero:'',
        maiorDivisivelPorMenor:'',
        diferenca:'',
    }
    
    if (num1 > num2)
    {
        objeto.maiorNumero = num1;
        if (num1 % num2 === 0)
        {
            objeto.maiorDivisivelPorMenor = true;
        }
        else
        {
            objeto.maiorDivisivelPorMenor = false;
        }
        objeto.diferenca = num1 - num2;
    }
    else
    {
        objeto.maiorNumero = num2;
        if (num2 % num1 === 0)
        {
            objeto.maiorDivisivelPorMenor = true;
        }
        else
        {
            objeto.maiorDivisivelPorMenor = false;
        }
        objeto.diferenca = num2 - num1;
    }

    return objeto;

}

// EXERCÍCIO 08
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares.
function retornaNPrimeirosPares(n) {
   
    let arrayPares = [];

    for (i = 0; arrayPares.length < n; i++)
    {
        if (i % 2 === 0)
        {
            arrayPares.push(i);
        }
    }

    return arrayPares;

    } 

// EXERCÍCIO 09
// Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero,
// isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC)
    {
        console.log('Este triângulo é ESCALENO')
        return "Escaleno";
    }
    else if (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC ||
             ladoA === ladoC && ladoA !== ladoB && ladoB !== ladoC ||
             ladoB === ladoC && ladoA !== ladoC && ladoA !== ladoB
            )
    {
        console.log('Este triângulo é ISÓSCELES')
        return "Isósceles";
    }
    else
    {
        console.log('Este triângulo é EQUILÁTERO')
        return "Equilátero";
    }

}

// EXERCÍCIO 10
// Escreva uma função que receba um array de números e retorne um novo array com apenas 2 valores (NESTA ORDEM):
// o segundo maior e o segundo menor número do array original.
function retornaSegundoMaiorESegundoMenor(array) {

    let newArr = array.sort(function compararNumeros(a, b) {
        return a - b;
      });

    return [newArr[newArr.length - 2], newArr[1]];
  
}

// EXERCÍCIO 11
// Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco.
// Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`

}

// EXERCÍCIO 12
// Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo
// objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome.
function retornaPessoaAnonimizada(pessoa) {
   
let novaPessoa = {...pessoa,
    nome: 'ANÔNIMO'
}

return novaPessoa;

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
    // pessoas = { nome: "Paula", idade: 12, altura: 1.8},
	// { nome: "João", idade: 20, altura: 1.3},
	// { nome: "Pedro", idade: 15, altura: 1.9},
	// { nome: "Luciano", idade: 22, altura: 1.8},
	// { nome: "Artur", idade: 10, altura: 1.2},
	// { nome: "Soter", idade: 70, altura: 1.9}

    //a 

    function isTallEnough(pessoas)
    {
        if (pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    let autorizadas = pessoas.filter(isTallEnough);

    return autorizadas;

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    function isntTallEnough(pessoas)
    {
        if (pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade > 60)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    let naoAutorizadas = pessoas.filter(isntTallEnough);

    return naoAutorizadas;
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    // let contas = [
    //     { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    //     { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    //     { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    //     { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    //     { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    //     { cliente: "Soter", saldoTotal: 1200, compras: [] }
    // ]

    contas[0].saldoTotal = 500;
    contas[1].saldoTotal = 6260;
    contas[2].saldoTotal = -3340;
    contas[3].saldoTotal = -1900;
    contas[4].saldoTotal = 1300;
    contas[5].saldoTotal = 1400;

    contas[0].compras = [];
    contas[1].compras = [];
    contas[2].compras = [];
    contas[3].compras = [];
    contas[4].compras = [];
    contas[5].compras = [];

    return contas; 

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    let newObj = [];

    for (var i = 0; i < consultas.length; i++)
    {
        newObj.push(consultas[i].nome);
    }

    newObj.sort();

    let newArr = [];

    for (var i = 0; i < newObj.length; i++)
    {
        for (var j = 0; j < consultas.length; j++)
        {
            if (newObj[i] === consultas[j].nome)
            {
                newArr.push(consultas[j]);
            }
        }
    }
    return newArr;

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    // let consultas = [ 
    //     { nome: "Márcia", dataDaConsulta: "04/05/2021" },
    //     { nome: "Pedro", dataDaConsulta: "02/07/2021" },
    //     { nome: "João",  dataDaConsulta: "01/10/2021" },
    //     { nome: "Paula", dataDaConsulta: "03/11/2021" } 
    // ];

    let newObj = [];

    for (i = 0; i < consultas.length; i++)
    {
       newObj.push(consultas[i].dataDaConsulta)
    }

    newObj.sort((a, b) => a.dataDaConsulta - b.dataDaConsulta);


    console.log(newObj);

    let organizadoPorData = [];

    for (var i = 0; i < newObj.length; i++)
    {
        consultas[i].dataDaConsulta = organizadoPorData[i];
    }

    console.log(consultas);

    return newArr;
   
}