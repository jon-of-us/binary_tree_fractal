import * as s from "../settings/tmplt_settings.js";
import * as f from "../settings/functions.js";
const createShifter = (keyOne, keyTwo, maxVal) => {
    const changeCoords = (coord, isReverse) => {
        if (isReverse) {
            return f.mod(coord - pos, maxVal);
        }
        return f.mod(coord + pos, maxVal);
    };
    let pos = 0;
    let shiftInterval;
    let currentShiftLabel = '';
    const shiftCoords = (sign, shiftLabel) => {
        if (currentShiftLabel !== shiftLabel) {
            clearInterval(shiftInterval);
            shiftInterval = setInterval(() => {
                pos += s.shiftStep * sign;
                pos = f.mod(pos, maxVal);
            }, s.shiftIntervalTime);
            currentShiftLabel = shiftLabel;
        }
    };
    const clearShiftInterval = (shiftLabel) => {
        if (shiftLabel === currentShiftLabel) {
            clearInterval(shiftInterval);
            currentShiftLabel = '';
        }
    };
    document.addEventListener('keydown', event => {
        switch (event.key) {
            case keyOne:
                shiftCoords(-1, keyOne);
                break;
            case keyTwo:
                shiftCoords(1, keyTwo);
                break;
        }
    });
    document.addEventListener('keyup', event => {
        clearShiftInterval(event.key);
    });
    return {
        get pos() { return pos; },
    };
};
export const shiftX = createShifter('ArrowRight', 'ArrowLeft', window.innerWidth);
export const shiftY = createShifter('ArrowDown', 'ArrowUp', window.innerHeight);
//# sourceMappingURL=shifter.js.map