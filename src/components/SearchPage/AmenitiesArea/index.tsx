import { Container, Content } from "./styles";
import dumbbellImg from '../../../assets/dumbbell.png'
import receptionImg from '../../../assets/reception.png'
import wifiImg from '../../../assets/wifi.png'
import tvImg from '../../../assets/tv.png'
import parkingImg from '../../../assets/parking.png'
import pawprintImg from '../../../assets/pawprint.png'
import poolImg from '../../../assets/pool.png'
import arcondicionadoImg from '../../../assets/arcondicionado.png'
import restaurantImg from '../../../assets/restaurant.png'
import spaImg from '../../../assets/spa.png'
import barImg from '../../../assets/bar.png'
import cafeImg from '../../../assets/cafe.png'
import pneImg from '../../../assets/pne.png'
import familyImg from '../../../assets/family.png'

export function AmenitiesArea() {
  return(
    <Container>
      <Content>
        <h2>Amenites</h2>
        <section className="layout">
          
          <div>
            <div className="Amenitie">
              <img src={receptionImg} alt=""/>
              <p>Recepção 24h</p>
            </div>
            
          </div>

          <div> 
            <div className="Amenitie">
              <img src={wifiImg} alt=""/>
              <p>Wi-fi</p>
            </div>      
          </div>

          <div> 
            <div className="Amenitie">
              <img src={tvImg} alt=""/>
              <p>TV a cabo</p>
            </div> 
          </div>

          <div> 
            <div className="Amenitie">
              <img src={parkingImg} alt=""/>
              <p>Estacionamento</p>
            </div> 
          </div>

          <div>
            <div className="Amenitie">
              <img src={arcondicionadoImg} alt=""/>
              <p>Ar-condicionado</p>
            </div> 
          </div>

          <div>
            <div className="Amenitie">
              <img src={poolImg} alt=""/>
              <p>Piscina</p>
            </div> 
          </div>

          <div> 
            <div className="Amenitie">
              <img src={spaImg} alt=""/>
              <p>SPA</p>
            </div> 
          </div>

          <div> 
          <div className="Amenitie">
              <img src={dumbbellImg} alt=""/>
              <p>Acadêmia</p>
            </div> 
          </div>

          <div> 
          <div className="Amenitie">
              <img src={restaurantImg} alt=""/>
              <p>Restaurante</p>
            </div> 
          </div>

          <div> 
          <div className="Amenitie">
              <img src={barImg} alt=""/>
              <p>Bar</p>
            </div> 
          </div>

          <div> 
          <div className="Amenitie">
              <img src={cafeImg} alt=""/>
              <p>Café da manha</p>
            </div> 
          </div>

          <div> 
          <div className="Amenitie">
              <img src={pawprintImg} alt=""/>
              <p>Animais</p>
            </div> 
          </div>

          <div> 
            <div className="Amenitie">
              <img src={pneImg} alt=""/>
              <p>Acessível PNEs</p>
            </div> 
           </div>

          <div> 
            <div className="Amenitie">
              <img src={familyImg} alt=""/>
              <p>Family friendly</p>
            </div> 
          </div>
        </section>
      </Content>
    </Container>
  )
}