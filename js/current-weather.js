import weather from './../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-data.js'


function setCurrentTemp ( element, temp) {
    element.textContent = formatTemp(temp)
}

function setCurrentDate( element ) {   
    const date = new Date()
    const formattedDate = formatDate( date )
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
    // 
    const currentWeatherTemp = document.querySelector('#current-weather-temp')
    const temp = weather.main.temp 
    setCurrentTemp( currentWeatherTemp, temp ) 
    
    //backgroudn
}
export default function currentWeater() {
    configCurrentWeather( weather )
}