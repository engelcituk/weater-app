import weather from './../data/current-weather.js'
import { formatDate, formatTemp } from './utils/format-data.js'
import {  weatherConditionsCodes } from './constants.js'
import { getCurrentPosition } from './geolocation.js'

function solarStatus( sunriseTime, sunsetTime) {
    const currentHours = new Date().getHours()
    const sunriseHours = sunriseTime.getHours()
    const sunsetHours = sunsetTime.getHours()

    if( currentHours > sunsetHours || currentHours < sunriseHours ){
        return 'night'
    }

    return 'morning'
}
function setBackground ( element, conditionCode, solarStatus ) {
    const weatherType = weatherConditionsCodes[conditionCode]
    const size = window.matchMedia('(-webkit-min-device-pixel-ratio: 2)').matches ? '@2x' : ''
    element.style.backgroundImage = `url('./images/${solarStatus}-${weatherType}${size}.jpg')`
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
    const conditionCode =  String( weather.weather[0].id ).charAt(0) 
 
    setBackground( app, conditionCode, solarStatus( sunriseTime, sunsetTime) )
}
export default function currentWeater() {
    getCurrentPosition().then( (data) => {
        console.log( data )
    }).catch( (msg) => {
        console.log( msg )
    })
    configCurrentWeather( weather )
}