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
  
}

// EXERCÍCIO 11
// Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco.
// Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
// Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo
// objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome.
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}