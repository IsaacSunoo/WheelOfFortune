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

      this.resetWheel();
      this.updateColorValue();

    }

    resetWheel() {
      $(".reset-btn").on("click", () => {
        $(".wheel").css("transform", "rotate(360deg)");
        console.log('test')
        this.updateColorValue();
          });
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

  displayNewRound(currentRound, players, currentPlayer) {
    clearPuzzleBoard();
    this.updateRound(currentRound);
    this.updatePlayerInfo(players);
    this.displayPlayerTurn(currentPlayer);

  }

  updateRound(round) {
    $('.round-counter').text(round);
  }

  displayPuzzleCategory(currentCategory) {
    $('.category-name').text(currentCategory);
  }

  updatePlayerInfo(players) {

  }

  displayPlayerTurn(currentPlayer) {
    // add class to indicate players turn
    $(`player-${currentPlayer}-box`).addClass('');
  }

  displayRoundPhrase(board, answer, idx) {
    let word = answer.correct_answer.split('-').join(' ').toUpperCase();
    for (let i = idx; i < idx + word.length; i++) {
      $('.letter-block').eq(i).text(word.split('')[i - idx]);
    }
  }


}

export default domUpdates;