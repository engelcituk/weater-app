import weather from './../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-data.js'


function solarStatus( sunriseTime, sunsetTime) {
    const currentHours = new Date().getHours()
    const sunriseHours = sunriseTime.getHours()
    const sunsetHours = sunsetTime.getHours()

    if( currentHours > sunsetHours || currentHours < sunriseHours ){
        return 'night'
    }

    return 'morning'
}
function setBackground ( element, solarStatus ) {
    element.style.backgroundImage = `url('./images/${solarStatus}-drizzle.jpg')`
}

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
    
    //background
    const sunriseTime = new Date( weather.sys.sunrise * 1000 )
    const sunsetTime = new Date( weather.sys.sunset * 1000 )
    const app = document.querySelector('#app')
    setBackground( app, solarStatus( sunriseTime, sunsetTime) )
}
export default function currentWeater() {
    configCurrentWeather( weather )
}