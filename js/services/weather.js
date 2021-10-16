import { API_KEY, BASE_URL } from './../constants.js'

export async function getCurrentWeather(lat, long) {
    const response = await fetch(`${BASE_URL}weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`, {
        method: 'GET'
    })
    if( !response.ok ) return {
        isError: false, 
        data: null
    }

    const data = await response.json()
    return {
        isError: false,
        data
    }
}