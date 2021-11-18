// Exercício de escrita de código 2

let comidas = ['Frango com Quiabo', 'Macarrão', 'Feijoada', 'Lasanha', 'Pizza'];

console.log('Estas são minhas 5 comidas prediletas: '+comidas.join('\n'));

let comidaUser = prompt('Qual a sua comida favorita? ');

comidas[1] = comidaUser;

console.log(comidas);