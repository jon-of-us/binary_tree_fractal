

import * as s from "./settings/settings.js";
import * as canvas from "./canvas.js";
import * as visual from "./visual.js";


const loop = () => {
    visual.drawAll();
    requestAnimationFrame(loop)
}
loop();