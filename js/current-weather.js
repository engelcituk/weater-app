import weather from './../data/current-weather.js'
import {formatData} from './utils/format-data.js'

function setCurrentDate( element ) {
   
    const date = new Date()
    const formattedDate = formatData( date )
    element.textContent = formattedDate
}

function setCurrentCity(element, city) {
    element.textContent = city
}

function configCurrentWeather( weather ) {
    //loader

    //date
    const currentWeatherDate = document.querySelector('#current-weather-date')
    setCurrentDate(currentWeatherDate)
    //city
    const currentWeatherCity = document.querySelector('#current-weather-city')
    const city = weather.name
    setCurrentCity( currentWeatherCity,  city) 
    // temp

    //backgroudn
}
export default function currentWeater() {
    configCurrentWeather( weather )
}