

//color 
export const canvasColor = 'rgb(20,20,20)';
export const canvasColorWithA = (a: number) => {
    return `rgba(20,20,20,${a})`;
}

//user input
    //mouse tracking
    export const mouseShift = -9
    //mouse angle
    export const rootX = window.innerWidth / 2
    export const rootY = window.innerHeight / 2
    //shifter
    export const shiftIntervalTime = 10
    export const shiftStep = 5

//slider settings
export const sliderColor = 'rgb(230,230,230)';
export const upperSlider = 30
export const sliderHeight = (sliderIndex: number)=>{
    return String(upperSlider + sliderIndex*47) + 'px'
}