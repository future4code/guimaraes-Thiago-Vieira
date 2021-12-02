//Desafio 1

// let num1 = Number(prompt("Vamos jogar!"));
// let num2, i = 0;

// while (num2 != num1)
// {
//     num2 = Number(prompt("Tente acertar o número do primeiro jogador!"));
//     if (num2 > num1)
//     {
//         console.log("Errrrrrou! É maior! O numero chutado foi: "+num2);
//         i++;
//     }
//     else if (num2 < num1)
//     {
//         console.log("Errrrrrou! É menor! O numero chutado foi: "+num2);
//         i++;
//     }
//     else
//     {
//         console.log("Certô mizeravi!");
//     }
// }

// console.log("O número de tentativas foi: "+i)

//Desafio 2

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

let userInput;
let i = 0;

while (userInput != randomNum)
{
    userInput = Number(prompt("Tente acertar o número da CPU entre 1 e 100!"));
    if (userInput === 0)
    {
        break;
    }
    else if (userInput > randomNum)
    {
        console.log("Errrrrrou! É maior! O numero chutado foi: "+userInput);
        i++;
    }
    else if (userInput < randomNum)
    {
        console.log("Errrrrrou! É menor! O numero chutado foi: "+userInput);
        i++;
    }
    else
    {
        console.log("Certô mizeravi!");
    }
}

