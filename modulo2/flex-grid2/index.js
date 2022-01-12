const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
  ]

function criarArrayNomesAnimais() {
    
    const nomesAnimais = animais.map((array) => { return array.nome})

    console.log (nomesAnimais);
    return nomesAnimais;

}

criarArrayNomesAnimais();