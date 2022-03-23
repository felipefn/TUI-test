import { Container, Search, Calendar, Content, Guests} from "./styles";


import iconSearchImg from "../../../assets/iconsearch.svg"
import iconCalendarImg from "../../../assets/iconcalendar.svg"
import iconGuestsImg from "../../../assets/iconguests.svg"
import iconarrowImg from "../../../assets/iconarrow.svg"


export function SearchBar() {
  return(
    <Container>
      <Content>
        <Search>
        <img src={iconSearchImg} alt="Search" />
        <input         
          placeholder="Pesquise por destino ou hotel"
          className="search"
        />
        </Search>
      </Content>

      <Content>
        <Calendar>
          <img src={iconCalendarImg} alt="Search" />
            <input 
              className="date"
              placeholder="Escolha uma data"
            />
        </Calendar>
      </Content>

      <Content>
        <Guests>
          <img src={iconGuestsImg} alt="Search" />
            <input 
              className="guests"
              type="number"          
              placeholder="Hóspedes"
            />
        </Guests>        
      </Content>
      
      <button
        type="submit"
      >     
      Pesquisar    
      <img src={iconarrowImg} alt="Pesquisar" /> 
      </button>
    </Container>
  )
}