

import * as s from "./settings/tmplt_settings.js";

document.body.style.backgroundColor = s.canvasColor;
document.body.style.margin = '0 px'
document.body.style.overflow = 'hidden';

const canv = document.body.appendChild(document.createElement("canvas"));
const ctx = canv.getContext("2d")!;
canv.style.position = "absolute";
canv.style.background = s.canvasColor
canv.style.border = `1px solid `;
canv.style.zIndex = '0'
console.log('canvas is readY!')

const resizeCanvas = ()=>{
    canv.width = window.innerWidth - 20
    canv.height = window.innerHeight - 20
}
resizeCanvas()
window.addEventListener('resize', resizeCanvas)


export {
    canv,
    ctx,
}