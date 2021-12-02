//Exercicios de escrita de codigo
//1

// var bichinhos = Number(prompt("Quantos bichinhos de estimação você tem? "));

// if (bichinhos === 0 || bichinhos === undefined)
// {
//     console.log("Que pena! Você pode adotar um pet!");
// }
// else if (bichinhos > 0)
// {
//     var nomes =[], i = 0;
    
//     while (i < bichinhos)
//     {
//         nomes[i] = prompt("Qual o nome do seu bichinho?");
//         i++;
//     }
//     console.log(nomes);
// }
// else
// {
//     console.log("Por favor, insira um número válido de pets.");
// }


//2
//a

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprime(arr)
{
    for (i = 0; (i < arr.length); i++)
    {
        console.log(arr[i]);
    }
}

//b
function divideDez(arr)
{
    for (i = 0; (i < arr.length); i++)
    {
        arr[i] = arr[i] / 10;
    }
    console.log(array);
}

//c
function imprimePar(arr)
{
    var i = 0, newArray = [];
    while (i < arr.length)
    {
        if(arr[i] % 2 === 0)
        {
            newArray.push(arr[i]);
            i++
        }
        else
        {
            i++
        }
    }
    console.log(newArray);
}

//d
function imprimeStrings(arr)
{
    let newArray= [];
    for (i = 0; (i < arr.length); i++)
    {
        newArray[i] = "O elemento do índex "+i+" é: "+arr[i]+"."
    }
    console.log(newArray)

}

//e
function maiorMenor(arr)
{
    var menor, maior = 0;
    for (i = 0; (i < arr.length); i++)
    {
        if (arr[i] > maior)
        {
            maior = arr[i];
            i++;
        }

        else
        { 
            i++;
        }
    }
    console.log("O maior número do array é: "+maior);
    
    n = arr[0];
    i = 0;
    while (i < arr.length)
    {
        if (arr[i] < n)
        {
            menor = arr[i];
            n = menor;
            i++;
        }
        else
        {
            i++;
        }
    }
    console.log("O menor número do array é: "+menor);
}
    
    

