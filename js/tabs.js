
const tabsContainer = document.querySelector('#tabs')
const tabList = tabsContainer.querySelectorAll('.tab')

const today = new Date()
let weekDay = today.getDay()

const week = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
]

function nextDay( day ) {
    if( day  === 6 ) return 0
    return day + 1
}
tabList.forEach( (tab, index) => {
    if( index === 0 ){
        tab.textContent = 'Hoy'
        weekDay = nextDay( weekDay ) 
        return false
    }
    tab.textContent = week[ weekDay ]
    weekDay = nextDay( weekDay ) 
})