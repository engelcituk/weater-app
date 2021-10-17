export function getViewport() {
    return window.innerHeight
}

export function setViewportSize( element ) {
    const viewportBlockSize = getViewport()
    element.style.blockSize = `${viewportBlockSize}px`

}

export function onViewportResize( callback) {
    
    window.addEventListener('resize', callback )
}


export function offViewportResize( callback ) {

    window.addEventListener('resize', callback )
}


export function viewportSize( element ) {

    setViewportSize( element ) 

    onViewportResize( () => setViewportSize( element ) )
}