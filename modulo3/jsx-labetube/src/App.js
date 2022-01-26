import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <h1>LabeTube</h1>
            <div className="search">
                <input type="text" placeholder="Busca" id="campoDeBusca" />
                <button>Buscar</button>
            </div>
        </header>
    <main>
        <nav className="menu-vertical">
            <ul>
                <a href="#"><li className="botoes-meunu-vertical">Início</li></a>
                <a href="#"><li className="botoes-meunu-vertical">Em alta</li></a>
                <a href="#"><li className="botoes-meunu-vertical">Inscrições</li></a>
                <a href="#"><li className="botoes-meunu-vertical">Originais</li></a>
                <a href="#"><li className="botoes-meunu-vertical">Histórico</li></a>
            </ul>
        </nav>

        <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media2" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media3" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media4" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media5" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media6" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media7" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
            <div className="box-pagina-principal media8" onclick="reproduzVideo()">
                <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                <h4>Título do vídeo</h4>
            </div>
        </section>
    </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  );
}

export default App;
