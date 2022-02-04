import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {
  
  state = { 
    posts : [
    {nomeUsuario: 'ana', fotoUsuario: 'https://picsum.photos/50/60', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'thiago', fotoUsuario: 'https://picsum.photos/50/5', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'thalita', fotoUsuario: 'https://picsum.photos/50/5', fotoPost: 'https://picsum.photos/200/150'}
  ]}  

  render() {

    const novoPost = this.state.posts.map((item) => {return <Post nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.fotoPost} />});

    return (
      <MainContainer>
        {novoPost}
      </MainContainer>
    );
  }
}

export default App;
