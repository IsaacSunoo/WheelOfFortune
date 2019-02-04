import Wheel from './Wheel';
import Data from './data'

class domUpdates {

    spinWheel() {
  
    let randomNum = Math.floor(Math.random() * 6);
      
      var color = randomNum;
        switch(color) {
          case 0:
          $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(720deg)");
              });
          break;
          case 1:
          $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(780deg)");
              });
          break;
          case 2:
          $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(840deg)");
              });
          break;
          case 3:
          $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(900deg)");
              });
          break;
          case 4:
          $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(960deg)");
              });
          break;
          case 5:
          $(".spin-btn").on("click", () => {
            $(".wheel").css("transform", "rotate(1020deg)");
              });
      }

      this.updateColorValue();

    }

    updateColorValue() {
    
    
      let colors = {
      red: '',
      orange: '',
      yellow: '',
      green: '',
      blue: '',
      purple: ''    
    };

    for(let i = 0; i < 6; i++){
      for(var property in colors){
        let randomNum2 = Math.floor(Math.random() * 22);
        let colorPoint = Data.wheel[randomNum2];
        colors[property] = colorPoint;
      }
    }
    console.log(colors)
    $('.wheel-red').text(`Red: ${colors.red}`)
    $('.wheel-orange').text(`Orange: ${colors.orange}`)
    $('.wheel-yellow').text(`Yellow: ${colors.yellow}`)
    $('.wheel-green').text(`Green: ${colors.green}`)
    $('.wheel-blue').text(`Blue: ${colors.blue}`)
    $('.wheel-purple').text(`Purple: ${colors.purple}`)
    }

};

export default domUpdates;

// red 720
// purple 780
// blue 840
// green 900
// yellow 960
// orange 1020