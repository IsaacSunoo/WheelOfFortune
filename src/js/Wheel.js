import DomUpdates from './domUpdates'

class Wheel {
  constructor() {
    this.wheelValues = [];
    this.currentSpin;
  }



  createWheelValues() {
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.floor(Math.random() * 30);
      this.wheelValues.push(data.wheel[randomNum]);
    }
  }

  spinWheel() {
    this.currentSpin = this.wheelValues[randomNum];
    let randomNum = Math.floor(Math.random() * 6);
    let spin = randomNum * (Math.ceil(Math.random() * 4) * 360);
    domUpdates.spinWheel(spin);
  }
}

export default Wheel;