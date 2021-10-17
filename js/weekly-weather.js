import { getWeeklyWeather } from './services/weather.js'
import { getLatLong } from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'

function configWeeklyWeather( weekList ) {
    const constainer = document.querySelector('.weeklyWeather')
    weekList.forEach( () => {
        const element = createDOM( `<h2>hola mundo</h2>` )
        constainer.append(element)
    })
}
export default async function weeklyWeather(params) {

    const { lat, long, isError } = await getLatLong()
    if( isError ) return console.log('Ha ocurrido un error ubicándote')

    const { isError: weeklyWeatherError, data: weather } =  await getWeeklyWeather(lat, long)
    if( weeklyWeatherError ) return console.log('Oh, ha ocurrido un error trayendo el pronostico del clima')
    
    const weekList = formatWeekList( weather.list )
    
    configWeeklyWeather( weekList )
}