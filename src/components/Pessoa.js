import React from 'react'
import { Conteudo,Imagem,DivFlex,Info } from '../styled/Layout'
function Pessoa(props) {
  const fullName = props.name.title + " " + props.name.first+ " " + props.name.last;
  const linkImg = props.picture.large;
  return (
    <Conteudo>
      <DivFlex>
        <Imagem src={linkImg}/>
        <Info>
          {fullName}
        </Info>
      </DivFlex>
    </Conteudo>
  )
}

export default Pessoa