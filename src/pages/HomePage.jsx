import React from 'react'
import '../public.css'
import { Fundo } from '../styled/Layout'
import Navbar from '../components/Navbar'
function HomePage() {
  return (
    <Fundo>
      <Navbar/>
      <h1>Bem vindo ao meu site</h1>
    </Fundo>
  )
}

export default HomePage