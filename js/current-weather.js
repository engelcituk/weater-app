import weather from './../data/current-weather.js'

function setCurrentCity(element, city) {
    element.textContent = city
    
}
function configCurrentWeather( weather ) {
    //loader

    //date

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