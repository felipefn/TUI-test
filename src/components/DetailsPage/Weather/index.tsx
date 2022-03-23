import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Container, Content } from "./styles";

interface City {
  temperature: number  
  unit: string
  temperaturemin: number
  text: string
  date: string | any
  
  
}

interface CitySearch {
  
  id: string
  
}

const apikey = "zTACMNlWaQ4QOCOcl8T250DQJDzRP9tJ"
const forecasturl = "http://dataservice.accuweather.com/forecasts/v1/daily/1day/"
const searchurl = "http://dataservice.accuweather.com/locations/v1/cities/search" 




async function getCityInfo(cityName:string): Promise<CitySearch|null> {
  try {
    const response = await fetch (`${searchurl}?apikey=${apikey}&q=${cityName}&details=false HTTP/1.1`)
    const key = await response.json()

    return {      
      id: key[0].Key,
    }
  
  } catch (error) {
      return null
  }
  
  
}


async function getCity(cityId:string): Promise<City> {

  const response = await fetch (`${forecasturl}${cityId}?apikey=${apikey}&metric=true`)
  const city = await response.json()

  return {
    temperature: city?.DailyForecasts[0].Temperature.Maximum.Value,
    unit: city?.DailyForecasts[0].Temperature.Maximum.Unit ,
    temperaturemin: city?.DailyForecasts[0].Temperature.Minimum.Value,
    text: city?.Headline.Text,
    date: city?.DailyForecasts[0].Date,
    
  }
}

export function Weather() {

   

  const [city, setCity] = useState<City>() 
    useEffect(function(){
      async function getCities() {
        const cityInfo = await getCityInfo("recife")
        if (cityInfo){
          const city = await getCity(cityInfo.id)
          setCity (city)
        }       
      }
        
      getCities()
  
    },[])  
     
  return(
    <Container>
      <Content>
        <div className="location"></div>

        <div className="temp">{city?.temperaturemin}°{city?.unit} - {city?.temperature}°{city?.unit} </div>

        <div className="text">{city?.text}</div>

        <div className="date">{new Date (city?.date).toLocaleDateString("pt-BR")}</div>
      </Content>
    </Container>
  )
}