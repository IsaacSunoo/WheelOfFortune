import domUpdates from './domUpdates';
import data from "./data.js";

class Wheel {
  constructor() {
    this.wheelValues = [];
    this.currentSpin;
    this.wheelSpinValue;
  }

  createWheelValues() {
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 22);
      this.wheelValues.push(data.wheelRound[randomNum]);
    }
  }

  spinWheel() {
    let randomNum = Math.floor(Math.random() * 6);
    this.currentSpin = this.wheelValues[randomNum];
    domUpdates.spinWheel(randomNum);
    this.wheelSpinValue = randomNum;
  }
}

export default Wheel;