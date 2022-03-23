import { AmenitiesArea } from "../AmenitiesArea";
import { HotelList } from "../HotelList";
import { Container } from "./styles";


export function SearchMenu() {
  return(
    <Container>
      <AmenitiesArea/>
      <HotelList/>
    </Container>
  )
}