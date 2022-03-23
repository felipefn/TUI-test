import { Container, Content, Search, Calendar, Guests } from "./styles";
import iconarrowImg from '../../../assets/iconarrow.svg'
import iconSearchImg from '../../../assets/iconsearch.svg'
import iconCalendarImg from '../../../assets/iconcalendar.svg'
import iconGuestsImg from '../../../assets/iconguests.svg'

export default function SearchCard() {
  return(



    
  <Container>
    <h2>Encontre sua estadia perfeita!</h2>

    <Search>
      <img src={iconSearchImg} alt="Search" />
      <input         
        placeholder="Pesquise por destino ou hotel"
      />
    </Search>

    <Content>
      <Calendar>
      <img src={iconCalendarImg} alt="Search" />
        <input 
          className="date"
          placeholder="Escolha uma data"
        />
      </Calendar>
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