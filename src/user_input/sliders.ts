import * as s from "../settings/tmplt_settings.js";


type onInputFunc = (value: number, max?: number)=>void;

let index = 0
const createSlider = (
    min: number, max: number, 
    scale: number, text: string,
    preSetValue: number = 0,
    color: string = s.sliderColor,
    func: onInputFunc = (value: number)=>{},
    ) => {
    
    let idx = index;
    index++;

    var slideContainer = document.createElement('div')
    document.body.appendChild(slideContainer)
    slideContainer.setAttribute('class', 'slidecontainer')
    slideContainer.style.top = s.sliderHeight(idx)
    var input = document.createElement('input')
    input.setAttribute('class', 'slider')
    input.setAttribute('type','range')
    input.setAttribute('min', min as unknown as string)
    input.setAttribute('max', max as unknown as string)
    input.setAttribute('value', preSetValue as unknown as string)
    slideContainer.appendChild(input)
    var outputSpan = document.createElement('span')
    outputSpan.setAttribute('class', 'text')
    outputSpan.style.color = color
    slideContainer.appendChild(outputSpan)

    let value: number;
    const updateOutput = () => {
        outputSpan.innerHTML = text + ": " + input.value
        value = input.value as unknown as number * scale
        func(value, max)
    }
    updateOutput()
    input.oninput = updateOutput
    
    return {
        get value(){return value},
    }
}


let length = createSlider(1, 100, 0.01, "length", 62)
let steps = createSlider(1, 10, 1, "steps", 10)
let arms = createSlider(1, 5, 1, "steps", 3)

export {
    length,
    steps,
    arms,
}