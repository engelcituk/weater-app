function geolocationSupport() {
    // if( 'geolocation' in navigator ){
    //     return true
    // }
    // return false
    return 'geolocation' in navigator 
}

export function getCurrentPosition(params) {
    if( !geolocationSupport() ) throw new Error('No hay soporte de geolocalización en tu navegador')
    
    return new Promise( ( resolve, reject ) => {
        navigator.geolocation.getCurrentPosition( ( position ) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            resolve({lat, long})
        }, () => { // funcion que se ejecuta sino se puede obtener los datos del usuario
            reject('No hemos podido obtener tu ubicación')
        },{})
    })

}