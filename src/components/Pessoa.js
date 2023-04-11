import React from 'react'
import { Conteudo,Imagem } from '../styled/Layout'
function Pessoa(props) {
  const fullName = props.name.title + " " + props.name.first+ " " + props.name.last;
  const linkImg = props.picture.large;
  return (
    <Conteudo>
      <Imagem src={linkImg}/>
      {fullName}
    
    </Conteudo>
  )
}

export default Pessoa