let idade = Number(prompt("Qual a sua idade?"));

meses = idade * 12;
dias = idade * 365;
horas = dias * 24;

console.log("Sua idade em meses e:", meses, "meses", 
          "\nSua idade em dias e:", dias, "dias",
          "\nSua idade em horas e:", horas, "horas");

// considerando aqui, somente os anos completos.