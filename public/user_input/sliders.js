import * as s from "../settings/tmplt_settings.js";
let index = 0;
const createSlider = (min, max, scale, text, preSetValue = 0, color = s.sliderColor, func = (value) => { }) => {
    let idx = index;
    index++;
    var slideContainer = document.createElement('div');
    document.body.appendChild(slideContainer);
    slideContainer.setAttribute('class', 'slidecontainer');
    slideContainer.style.top = s.sliderHeight(idx);
    var input = document.createElement('input');
    input.setAttribute('class', 'slider');
    input.setAttribute('type', 'range');
    input.setAttribute('min', min);
    input.setAttribute('max', max);
    input.setAttribute('value', preSetValue);
    slideContainer.appendChild(input);
    var outputSpan = document.createElement('span');
    outputSpan.setAttribute('class', 'text');
    outputSpan.style.color = color;
    slideContainer.appendChild(outputSpan);
    let value;
    const updateOutput = () => {
        outputSpan.innerHTML = text + ": " + input.value;
        value = input.value * scale;
        func(value, max);
    };
    updateOutput();
    input.oninput = updateOutput;
    return {
        get value() { return value; },
    };
};
let length = createSlider(1, 100, 0.01, "length", 62);
let steps = createSlider(1, 10, 1, "steps", 10);
let arms = createSlider(1, 5, 1, "steps", 3);
export { length, steps, arms, };
//# sourceMappingURL=sliders.js.map