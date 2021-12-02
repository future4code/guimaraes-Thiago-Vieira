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

    var playerCards =[];
    var cpuCards = [];

    alert('Welcome to Blackjack!');

    if (confirm('Do you want to star a new round?'))
    {
       playerCards.push(comprarCarta());
       playerCards.push(comprarCarta());
       cpuCards.push(comprarCarta());
       cpuCards.push(comprarCarta());

       //If both cards are Aces, redraw cards
       if (playerCards[0].valor === 11 && playerCards[1].valor === 11 ||
           cpuCards[0].valor === 11 && cpuCards[1].valor === 11)
            {
               playerCards.push(comprarCarta());
               playerCards.push(comprarCarta());
               cpuCards.push(comprarCarta());
               cpuCards.push(comprarCarta());
            }
       
       //Compute Player 1 score
       var playerScore = 0;

       for (var i = 0; i < playerCards.length; i++)
       {
         playerScore += playerCards[i].valor;
       }

       //Compute CPU score
       var cpuScore = 0;

       for (var i = 0; i < cpuCards.length; i++)
       {
         cpuScore += cpuCards[i].valor;
       } 

       console.log('Player 1 cards: ' + playerCards[0].texto, playerCards[1].texto+' Score: '+playerScore);
       console.log('CPU has a revealed card: '+cpuCards[0].texto+'\n')

       drawCard = false
       for (i = 0; drawCard === false; i++)
       {
         if(confirm('Would you like to draw another card?'))
         {
            playerCards.push(comprarCarta());
            console.log('Player 1 cards: ' + playerCards[i].texto+' Score: '+playerScore)
            i++
         }
       }

       if (playerScore > cpuScore)
       {
          console.log('Congratulations! You win!');
       }
       else if (cpuScore > playerScore)
       {
          console.log('You lose :(');
       }
       else if (playerScore > 21)
       {
          console.log('You lose :(');
       }
       else
       {
          console.log('Draw');
       }
    
    }
    else
    {
       console.log('The game has ended');
    }