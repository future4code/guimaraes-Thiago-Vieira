# Fixação JS

```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  
  let cont = 0;
  
  for (i = 0; i < arrayDeNumeros.length; i++)
  {
    if (arrayDeNumeros[i] === numeroEscolhido)
      cont++;
  }
  
  if (cont !== 0)
    {
    return "O número " + numeroEscolhido + " aparece " + cont + "x";
    }
  
  else
    {
    return "Número não encontrado";
    }
}```
