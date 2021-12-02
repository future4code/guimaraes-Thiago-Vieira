/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta.
    Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta.
    Exemplo: "K♦️" (indica "K" de ouros)

    console.log(carta.valor) // imprime o valor da carta (um número).
    Exemplo: 10 (dado que "K" vale 10)
 
 */

alert("Boas vindas ao jogo de Blackjack!");

if (confirm("Gostaria de iniciar uma nova partida?"))
{
   //jogadores recebem as cartas
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   const carta1Cpu = comprarCarta();
   const carta2Cpu = comprarCarta();

   //calculo do valor das cartas
   let usuarioValor = carta1.valor + carta2.valor;   
   let cpuValor = carta1Cpu.valor + carta2Cpu.valor;

   //display no console dos resultados
   console.log("Mão do usuário: "+carta1.texto+", "+carta2.texto+" = "+usuarioValor)
   console.log("Mão do CPU: "+carta1.texto+", "+carta2.texto+" = "+cpuValor)
   
   if (usuarioValor > cpuValor && usuarioValor < 21)
   {
      console.log("Parabéns! Você Venceu!")
   }
   else if (usuarioValor === cpuValor)
   {
      console.log("Empate! Tente novamente!")
   }
   else
   {
      console.log("A CPU venceu! Tente novamente!")
   }
}
else
{
   //fim de jogo
   console.log("O jogo acabou.")
}