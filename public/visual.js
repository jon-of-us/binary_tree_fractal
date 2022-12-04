import * as sliders from "./user_input/sliders.js";
import { complex } from "../node_modules/ts-complex-numbers/lib/complex.js";
import * as s from "./settings/settings.js";
import * as canvas from "./canvas.js";
function complexToCoords(c) {
    let x = c.real * s.RAD + window.innerWidth / 2;
    let y = c.img * s.RAD + window.innerHeight / 2;
    return [x, y];
}
let angle;
let turning_factor;
function draw(midpoint, iter, startAngle, scale) {
    if (iter >= sliders.steps.value) {
        return;
    }
    for (let i = 0; i < sliders.arms.value - (iter == 0 ? 0 : 1); i++) {
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(...complexToCoords(midpoint));
        let newCoords = complexToCoords(startAngle.add(midpoint));
        canvas.ctx.lineTo(...newCoords);
        canvas.ctx.stroke();
        canvas.ctx.closePath();
        canvas.ctx.arc(...newCoords, scale * 3, 0, 2 * Math.PI);
        canvas.ctx.fill();
        draw(midpoint.add(startAngle), iter + 1, startAngle.scalarMult(-sliders.length.value).mult(turning_factor), scale * sliders.length.value);
        startAngle = startAngle.mult(turning_factor);
    }
}
function drawAll() {
    canvas.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    canvas.ctx.fillStyle = "rgb(200, 200, 200)";
    canvas.ctx.strokeStyle = "rgb(200, 200, 200)";
    angle = Math.PI * 2 / sliders.arms.value;
    turning_factor =
        new complex(Math.cos(angle), Math.sin(angle));
    draw(new complex(0, 0), 0, new complex(0, -1), 1);
}
export { drawAll, };
//# sourceMappingURL=visual.js.map