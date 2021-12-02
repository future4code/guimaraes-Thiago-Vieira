Uma versão implementada do desafio pode ser vista no link abaixo:

[Future4 - Blackjack](http://unbiased-desire.surge.sh)

- 💡  Dicas Gerais
    - As cartas dos jogadores (usuário e computador) podem ser armazenadas em  `array`.
    - Faça cada etapa com calma! Teste bem; e utilize bastante o site fornecido para se basear

Resolva esta etapa no arquivo `desafio.js`

💡 Lembre de comentar o link para o script do `nossoJogo.js` enquanto faz o desafio!


O desafio consiste em adicionar regras ao jogo, mantendo as originais. Faça na ordem solicitada.

8 - Se as duas cartas iniciais do usuário ou do computador forem dois ases (`A`), as cartas devem ser sorteadas novamente.

9 - Após o sorteio das 2 cartas para cada jogador, as duas primeiras cartas do usuário continuam sendo reveladas. A primeira carta do computador é revelada, a segunda é oculta por enquanto. Você deve perguntar ao usuário se ele deseja comprar mais uma carta. Veja abaixo:

```jsx
confirm(
	"Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️." +
	"\n"+  // \n faz pular a linha
	"Deseja comprar mais uma carta?"
)

/*

Este confirm resulta na mensagem:

	Suas cartas são A♥️ J♣️. A carta revelada do computador é 4♣️.
	Deseja comprar mais uma carta?

*/
```

10 - A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu. Veja abaixo, uma sequência possível de mensagens mostradas ao usuário (usando `confirm` e `alert`)