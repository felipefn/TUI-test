import { Container, Content } from './styles'

import logoImg from '../../assets/logotui.svg'

export function Header() {

  return(
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Tui" />
        <button type="button">
          Buscar hotéis
        </button>
        <button>Explorar destinos</button>
        <button>
          Experiências 
        </button>
      </Content>
    </Container>
  )
}