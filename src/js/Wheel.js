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


spinWheel(){






}

export default Wheel;