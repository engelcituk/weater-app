import { getWeeklyWeather } from './services/weather.js'
import { getLatLong } from './geolocation.js'
import { formatWeekList } from './utils/format-data.js'
import { createDOM } from './utils/dom.js'

function tabPanelTemplate( id ) {
    return `
        <div class="tabPanel" tabindex="0" aria-labelledby="tab-${id}">
          <div class="dayWeather" id="dayWeather-${id}">
            <ul class="dayWeather-list" id="dayWeather-list-${id}">
            tab panel ${id}
            </ul>
          </div>
        </div>
    `
}
function createTabPanel(id) {
    const panel = createDOM( tabPanelTemplate( id ) )    
    if( id > 0 ){
        panel.hidden = true
    }
    return panel
}
function configWeeklyWeather( weekList ) {
    const constainer = document.querySelector('.weeklyWeather')
    weekList.forEach( (day, index) => {
        const panel = createTabPanel(index)
        constainer.append( panel )
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