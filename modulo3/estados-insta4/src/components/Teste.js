let usuarios = [
    {nomeUsuario: 'ana', fotoUsuario: 'https://picsum.photos/50/60', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'thiago', fotoUsuario: 'https://picsum.photos/50/5', fotoPost: 'https://picsum.photos/200/150'},
    {nomeUsuario: 'thalita', fotoUsuario: 'https://picsum.photos/50/5', fotoPost: 'https://picsum.photos/200/150'}
  ]

const novoPost = usuarios.map ((user)=>{
    
    return (
        user.nomeUsuario, user.fotoUsuario, user.fotoPost
    )
    
})

console.log(novoPost);