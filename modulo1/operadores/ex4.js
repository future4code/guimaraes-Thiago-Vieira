let numero1 = Number(prompt("Por favor, insira um numero. 1/2"));
let numero2 = Number(prompt("Por favor, insira outro numero. 2/2"));

maior = numero1 > numero2;
igual = numero1 === numero2;
teste1 = numero1 % numero2;
divisivel12 = teste1 === 0;
teste2 = numero2 % numero1;
divisivel21 = teste2 === 0;

console.log("O primeiro numero e maior que o segundo?", maior);
console.log("O primeiro numero e igual ao segundo?", igual);
console.log("O primeiro numero e divisivel pelo segundo?", divisivel12);
console.log("O segundo numero e divisivel pelo primeiro?", divisivel21);

/* console.log(teste1);
console.log(teste2); */