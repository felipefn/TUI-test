import { Container, Content } from './styles'

import logoImg from '../../../assets/logotui.svg'
import { Link } from 'react-router-dom'

export function Header() {

  return(
    <Container>
      <Content>
        <Link to="/"className='Home'>
          <img src={logoImg} alt="Logo Tui" />  
        </Link>  
          
        <Link to="/search"className='search'>
          Buscar Hotéis 
        </Link>    

        <button>Explorar destinos</button>
        
        <button>Experiências</button>
          
        
      </Content>
    </Container>
  )
}