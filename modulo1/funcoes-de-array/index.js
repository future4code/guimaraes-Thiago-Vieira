//Exercicios de interpretacao de codigo
// 1

// Declaracao de um array de objetos
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

// a) Imprime no console o item do array inicial, o valor de seu index e,
//   em seguida, o array completo.

// 2

// Declaracao de um array de objetos

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
    return item.nome
 })
  
  console.log(novoArrayB)

  // b) imprime no console a propriedade nome dos 3 itens do array usuarios

  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  // cria um novo array, retirando somente os itens com a propriedade 'Chijo'
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  // Imprime no console a variavel novoArrayC
  console.log(novoArrayC)