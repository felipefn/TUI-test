import { Container, Content } from "./styles";

export function HotelList() {
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th><h1>Hotéis encontrados</h1></th>
            
          </tr>
        </thead>

        <tbody>          
            <tr>
              <td>
                <Content>                  
                  <a href="/hotel"><div className="hotelImage"></div></a>
                 
                  <div className="hotelName">
                    <h2>Nome do Hotel</h2>
                    <p>Location</p>                    
                  </div>

                  <div className="valor">
                    R$000,00
                    <button>Escolha</button>
                  </div>
                </Content>
              </td>

              <td>
                <Content>
                  <a href="/hotel"><div className="hotelImage"></div></a>
                  
                  <div className="hotelName">
                    <h2>Nome do Hotel</h2>
                    <p>Location</p>                    
                  </div>
                  
                  <div className="valor">
                    R$000,00
                    <button>Escolha</button>
                  </div>
                </Content>
              </td>   

              <td>
                <Content>
                  <a href="/hotel"><div className="hotelImage"></div></a>
                  
                  <div className="hotelName">
                    <h2>Nome do Hotel</h2>
                    <p>Location</p>                    
                  </div>
                  
                  <div className="valor">
                    R$000,00
                    <button>Escolha</button>
                  </div>
                </Content>
              </td>

              <td>
                <Content>
                  <a href="/hotel"><div className="hotelImage"></div></a>
                  
                  <div className="hotelName">
                    <h2>Nome do Hotel</h2>
                    <p>Location</p>                    
                  </div>
                  
                  <div className="valor">
                    <h1>R$000,00</h1>
                    <button>Escolha</button>
                  </div>
                </Content>
              </td>          
            </tr>         
        </tbody>
      </table>

    </Container>
  )
}