import React from 'react'
import { Conteudo } from '../styled/Layout'
function Pessoa(props) {
  const fullName = props.name.title + " " + props.name.first+ " " + props.name.last;
  
  return (
    <Conteudo>{fullName}</Conteudo>
  )
}

export default Pessoa