 const defaultConfig = {
     animatable: true,
     debug: true,
     open: true,
 } 
 export default function draggable(element, config = defaultConfig ) {
     if( !(element instanceof HTMLElement ) ) {
         return console.warn( `Elemento invalido se esperaba un HTMLElement y se recibió ${element}` )
     }
     function logger( message ) {
        if( config.debug ){
             console.info(message)
        }
     }
 } 