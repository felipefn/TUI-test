import React, {useState, useEffect } from "react";

import { Container, Content } from "./styles";

import card1Img from '../../assets/card1.png'

interface City {
  temperature: number
  unit: string

}

const key = "zTACMNlWaQ4QOCOcl8T250DQJDzRP9tJ"
const url = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/"

async function getCityId(){}

async function getCity(cityId:string): Promise<City> {
  const response = await fetch(`${url}${cityId}?apikey=${key}&metric=true`)
  const city = await response.json()

  return {
    temperature: city?.DailyForecasts[0].Temperature.Minimum.Value ,
    unit: city?.DailyForecasts[0].Temperature.Minimum.Unit ,
  }
}

export function HotelCard() {

  const [cities, setCities] = useState<City[]>([]) 
    useEffect(function(){
      async function getCities() {
        const cities = await Promise.all( [getCity("44944"), getCity("1-35952_1_AL")])
         setCities (cities)
      }
        
      getCities()
  },[])
  console.log(cities[0]?.temperature, cities[0]?.unit)
  return(
    <Container>
      <h2>Destinos recomendados</h2>
      <Content>
        
        <div >
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3></h3>            
            <p></p>
          </a>
        </div>
        
        <div>
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div >        
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div>        
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div>        
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div>
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div>
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div>
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>

        <div>
          <a href="https://stay.tui.com/br?gclid=Cj0KCQiA09eQBhCxARIsAAYRiymEZkawNYlGNgWKdrNmMybx8CV8lzHro934jkA7yJunv8xEZLF27igaAonWEALw_wcB" target="_blank">
            <h3>Cidade</h3>            
            <p>Ofertas</p>
          </a>
        </div>
      </Content>  
    </Container>
  )
}