// Exercício de escrita de código 3

let listaDeTarefas = [];

listaDeTarefas[0] = prompt('Digite a 1ª tarefa para ser realizada hoje: ');
listaDeTarefas[1] = prompt('Digite a 2ª tarefa para ser realizada hoje');
listaDeTarefas[2] = prompt('Digite a 3ª tarefa para ser realizada hoje');

console.log(listaDeTarefas);

let n = prompt('Qual tarefa você já realizou? 1, 2 ou 3?');

listaDeTarefas.splice(n - 1, 1);

console.log(listaDeTarefas);