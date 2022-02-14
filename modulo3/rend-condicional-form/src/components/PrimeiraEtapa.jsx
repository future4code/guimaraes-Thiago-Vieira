import React from 'react'
import './Etapa.css'

export default function primeiraEtapa() {
  return (
    <div className='container'>
        <form action="">
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <p>1. Qual o seu nome?</p>
            <input type="text" />
            <p>2. Qual a sua idade?</p>
            <input type="text" />
            <p>3. Qual o seu email?</p>
            <input type="email" />
            <p>4. Qual a sua escolaridade?</p>
            <select>
                <option value="" selected>Selecione...</option>
                <option value="Ensino médio incompleto" >Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        </form>        
    </div>
  )
}
