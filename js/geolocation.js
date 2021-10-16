function geolocationSupport() {
    // if( 'geolocation' in navigator ){
    //     return true
    // }
    // return false
    return 'geolocation' in navigator 
}
const defaultOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 10000,
}
export function getCurrentPosition( options = defaultOptions ) {
    if( !geolocationSupport() ) throw new Error('No hay soporte de geolocalización en tu navegador')
    
    return new Promise( ( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition( ( position ) => {
            // const lat = position.coords.latitude
            // const long = position.coords.longitude
            resolve(position)
        }, () => { // funcion que se ejecuta sino se puede obtener los datos del usuario
            reject('No hemos podido obtener tu ubicación')
        }, options )
    })
}

export async function getLatLong( options = defaultOptions ) {
    try {
        const { coords: { latitude: lat, longitude: long} } = await getCurrentPosition( options )
        return { lat, long, isError: false }
    } catch (error) {
        return { lat: null, long: null, isError: true }        
    }
}