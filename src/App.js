import { Campo, Conteudo, Fundo,Titulo } from "./styled/Layout";
import './public.css'

function App() {
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
