import * as visual from "./visual.js";
const loop = () => {
    visual.drawAll();
    requestAnimationFrame(loop);
};
loop();
//# sourceMappingURL=index.js.map