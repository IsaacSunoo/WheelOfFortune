import data from "./data";
import Wheel from './Wheel.js';
import $ from 'jquery';

class BonusWheel extends Wheel {
    constructor(wheelValues, currentSpin) {
        super(wheelValues, currentSpin);
    }

    createBonusWheelValues() {
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.floor(Math.random() * 22);
            if (data.wheel[randomNum] === 'LOSE A TURN' || data.wheel[randomNum] === 'BANKRUPT') {
                i--;
            } else {
                this.wheelValues.push(data.wheel[randomNum] * 2);
            }
        }
    }
}

export default BonusWheel;