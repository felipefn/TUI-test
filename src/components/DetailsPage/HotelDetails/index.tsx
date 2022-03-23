import { HotelDescription } from "../HotelDescription";
import { Weather } from "../Weather";
import { Container } from "./styles";


export function HotelDetails() {
  return(
    <Container>
      <HotelDescription/>
      <Weather/>
      
    </Container>
  )
}