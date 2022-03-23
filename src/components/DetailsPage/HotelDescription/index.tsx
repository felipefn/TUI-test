import { Container } from "./styles";

interface searchHotel {
  hotelId: string
  cityCode: string,
  offersId: string,
  guests: number,
}

const baseUrl = 'https://test.api.amadeus.com'
const authUrl = '/v1/security/oauth2/token'



const body = new URLSearchParams({
  client_id: '5JNWQ2meefL44GjweGaGUxzsuzVrhALm',
  client_secret: 'yWfARw82NeV2Ozj9',
  grant_type: 'client_credentials'
})



async function start() {
  const response = await fetch(
    `${baseUrl}${authUrl}`,
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      }),
      body,
    }
  )
  const data = await response.json()
  localStorage.setItem('token', data.access_token)
  
}




async function searchById(): Promise<searchHotel> {
  start()
  const response = await fetch(
    `${baseUrl}/v3/shopping/hotel-offers?hotelIds=EDLONDER&adults=1&checkInDate=2022-06-20&roomQuantity=1&paymentPolicy=NONE&bestRateOnly=true`,
    {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      })
    }
  )

  const hotel = await response.json()
    console.log(hotel?.data[0].hotel.hotelId)

    return{
      hotelId: hotel?.data[0].hotel.hotelId,
      cityCode: hotel?.data[0].hotel.cityCode,
      offersId: hotel?.data[0].offers[0].id,
      guests: hotel?.data[0].offers[0].guests.adults,
    }
  
}
searchById()

async function offerId(){
  
  const response = await fetch(
    `${baseUrl}/v3/shopping/hotel-offers/PZOW8TZ9GV`,
    {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: `Bearer ${localStorage.getItem("token")}` 
      }) 
    }
  )
  
  const offer = await response.json()

  console.log(offer)
} 

offerId()

export function HotelDescription() {



  return(
    <Container>
      <h1>{}</h1>
      <h1>Nome do Hotel</h1>
      <h3>Hotel Description</h3>
      <p>Hotel Design upscale em estilo contemporâneo, localizado na região mais nobre da cidade de Florianópolis, a Avenida Beira-Mar Norte, próximo a Ponte Hercílio Luz, principal cartão postal do Estado de Santa Catarina e ao shopping Beira-Mar. Quartos com decoração minimalista e sofisticada trazem uma atmosfera de exclusividade, com amenities Loccitane e Roupa de Cama e Banho da Trousseau que irão proporcionar uma noite tranquila e relaxante. Academia de alta performance com Vista Mar e bicicletas estão à disposição dos clientes, bem como seu "pet" é bem-vindo no WK Design Hotel.</p>
    </Container>
  )
}