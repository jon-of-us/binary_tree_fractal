

import * as s from "../settings/tmplt_settings.js";
import * as f from "../settings/functions.js";

const createShifter = (keyOne: string, keyTwo: string, maxVal: number) => {

    const changeCoords = (coord: number, isReverse: boolean)=>{
        if (isReverse){
            return f.mod(coord - pos, maxVal)
        }
        return f.mod( coord + pos , maxVal)
    }
    
    let pos = 0
    let shiftInterval: number;
    let currentShiftLabel = ''
    const shiftCoords = (sign: number, shiftLabel: string)=>{
        if(currentShiftLabel !== shiftLabel){
            clearInterval(shiftInterval)
            shiftInterval = setInterval(() => {
                pos += s.shiftStep * sign
                pos = f.mod(pos, maxVal)
            }, s.shiftIntervalTime );
            currentShiftLabel = shiftLabel
        }
    }
    const clearShiftInterval = (shiftLabel: string) => {
        if (shiftLabel === currentShiftLabel){
            clearInterval(shiftInterval)
            currentShiftLabel = ''
        }
    }

    document.addEventListener('keydown',event => {
        switch (event.key){
            case keyOne:
                shiftCoords(-1, keyOne)
                break
            case keyTwo:
                shiftCoords(1,keyTwo)
                break
        }
        
    })
    document.addEventListener('keyup', event => {
        clearShiftInterval(event.key)
    })

    return {
        get pos(){return pos},
    }
}

export const shiftX = createShifter('ArrowRight','ArrowLeft', window.innerWidth)
export const shiftY = createShifter('ArrowDown','ArrowUp', window.innerHeight)
