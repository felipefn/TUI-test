import { Container, Content } from "./styles";
import { SearchCard } from "../SearchCard";


export function SearchArea() {
  return(
    <Container>
      <Content>
      <h1>O SEU QUARTO ESTÁ PRONTO</h1>
      <p>Encontre resorts, hotéis, apartamentos, casas e muito mais, com o melhor preço. É só pesquisar o destino dos seus sonhos!</p>
      
    </Content>
    <SearchCard/>
    </Container>
  )
}