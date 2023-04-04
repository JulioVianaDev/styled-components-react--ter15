import { Campo, Conteudo, Fundo,Titulo } from "./styled/Layout";
import './public.css'
import axios from 'axios';
import {useState,useEffect} from 'react';

function App() {
  const [pessoas,setPessoas] = useState([]);
  const url = "https://randomuser.me/api/?results=10"
  
  useEffect(()=>{
    axios.get(url)
      .then(res=>console.log(res))
  },[])

  return (
   <Fundo>
    <Titulo>Styled components</Titulo>
    <Campo>
      <Conteudo>
        batatinha quando nasce
      </Conteudo>
      <Conteudo>
        mac leva pras ideia
      </Conteudo>
    </Campo>
   </Fundo>
  );
}

export default App;
