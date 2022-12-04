

import * as s from "../settings/tmplt_settings.js";
import * as mousePos from "./mouse_pos.js";
import * as f from "../settings/functions.js";


let angle = 0

document.addEventListener('mousemove',()=>{
    var dY = mousePos.x - s.rootY
    var dX = mousePos.y - s.rootX
    var currentAngle = f.mod(-Math.atan2(dY,dX),Math.PI*2)
    var angleDiff = f.mod(angle - currentAngle + Math.PI, Math.PI*2)-Math.PI
    angle -= angleDiff
})

