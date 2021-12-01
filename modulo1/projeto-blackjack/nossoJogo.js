/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert('Welcome to Blackjack!');

if (confirm('Do you want to star a new round?'))
{
   var playerCard1 = comprarCarta();
   var playerCard2 = comprarCarta();
   var cpuCard1 = comprarCarta();
   var cpuCard2 = comprarCarta();

   var pontosPlayer = playerCard1.valor + playerCard2.valor;
   var pontosCpu = cpuCard1.valor + cpuCard2.valor;

   console.log('Player 1: ' + playerCard1.texto, playerCard2.texto + '. Score: ' + pontosPlayer);
   console.log('CPU: ' + cpuCard1.texto, cpuCard2.texto + '. Score: ' + pontosCpu);

   if (pontosPlayer > pontosCpu)
   {
      console.log('Congratulations! You win!')
   }
   else if (pontosCpu > pontosPlayer)
   {
      console.log('You lose :(')
   }
   else
   {
      console.log('Draw!')
   }

}
else
{
   console.log('The game has ended');
}