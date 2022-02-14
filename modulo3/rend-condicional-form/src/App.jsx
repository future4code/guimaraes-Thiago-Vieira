import { useState } from 'react'
import './App.css'
import PrimeiraEtapa from './components/PrimeiraEtapa'
import SegundaEtapa from './components/SegundaEtapa';
import TerceiraEtapa from './components/TerceiraEtapa';
import QuartaEtapa from './components/QuartaEtapa';

function App() {
    let [pagina, setPagina] = useState(1);

    const renderizaEtapa = () => {
        switch (pagina) {
            case 1:
            return <PrimeiraEtapa />;
            case 2:
            return <SegundaEtapa />;
            case 3:
            return <TerceiraEtapa />;
            case 4:
            return <QuartaEtapa />;
            default:
            return <PrimeiraEtapa />;
        }
    }

  const proximaEtapa = () => { 
    if(pagina > 4)
        pagina = 1;
    setPagina(pagina + 1)
  }   

  console.log('Valor de pagina', pagina);    


  return (
    <div className="App">
        {renderizaEtapa()}
        <div className="btn">
        {pagina !== 4 && (<button onClick={proximaEtapa}>Próxima Etapa</button>)}
        </div>
    </div>
  )
}

export default App
