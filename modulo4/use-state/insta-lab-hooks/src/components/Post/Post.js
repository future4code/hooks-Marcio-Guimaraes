import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

	const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState()





  // Como se trata de uma função, e não mais de um método, é necessário 
// mudar a sintaxe de método para função. 
// Ou seja, basicamente, colocar uma const antes do onClickCurtida.
// Isso já foi feito pra você no código do componente funcional.
const onClickCurtida = () => {
   if (curtido) {
     setCurtido (!curtido)
     setNumeroCurtidas(0)
     
   } else {
    setCurtido (true)
    setNumeroCurtidas(1)
   }
  
}

  const onClickComentario = () => {
    if (comentando) {
      setComentando(!comentando)
      setNumeroComentarios(0)
    } else{
     
      setComentando(!comentando)
    
    }
    
  
  };






  
  const enviarComentario = (comentario) => {
    const comentarioEnviado = [...comentarios, comentario]

    setComentarios(comentarioEnviado)
    setComentando(false)
    setNumeroComentarios(numeroComentarios +1)
    
  }

  const iconeCurtida = curtido ? iconeCoracaoPreto : iconeCoracaoBranco
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
  }

export default Post