

import * as s from "../settings/tmplt_settings.js";

let x = window.innerWidth / 2
let y = window.innerHeight / 2

//add eventlistener for tracking mousemovement
document.addEventListener('mousemove', function(e) {
    x = e.clientX + s.mouseShift
    y = e.clientY + s.mouseShift
})
console.log('Mouse detector is running!')



export {
    x,
    y, 
}