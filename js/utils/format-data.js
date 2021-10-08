

const defaultDateOptions = {
    day: 'numeric',
    weekday: 'long',
    month: 'long'
}
export function formatData( date, options = defaultDateOptions ) {
    return  new Intl.DateTimeFormat('es', options ).format( date )
}
