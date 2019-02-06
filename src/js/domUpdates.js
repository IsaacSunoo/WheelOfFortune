import Wheel from './Wheel';
import Data from './data';

const domUpdates = {

    spinWheel(color) {
      console.log(color)
      this.updateColorValue();  
      switch(color) {
          case 0:

            $(".wheel").css("transform", "rotate(720deg)");
     
          break;
          case 1:
          
            $(".wheel").css("transform", "rotate(780deg)");
              // });
          break;
          case 2:
          
            $(".wheel").css("transform", "rotate(840deg)");
              // });
          break;
          case 3:
          
            $(".wheel").css("transform", "rotate(900deg)");
              // });
          break;
          case 4:
          
            $(".wheel").css("transform", "rotate(960deg)");
              // });
          break;
          case 5:
          
            $(".wheel").css("transform", "rotate(1020deg)");
           
            }
      this.resetWheel();
    },

    resetWheel() {
      $(".reset-btn").on("click", () => {
        $(".wheel").css("transform", "rotate(360deg)");
        console.log('test');
        this.updateColorValue();
          });
    },

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
    console.log(colors);
    $('.wheel-red').text(`Red: ${colors.red}`);
    $('.wheel-orange').text(`Orange: ${colors.orange}`);
    $('.wheel-yellow').text(`Yellow: ${colors.yellow}`);
    $('.wheel-green').text(`Green: ${colors.green}`);
    $('.wheel-blue').text(`Blue: ${colors.blue}`);
    $('.wheel-purple').text(`Purple: ${colors.purple}`);
    },

  displayNewRound(currentRound, players, currentPlayer) {
    clearPuzzleBoard();
    this.updateRound(currentRound);
    this.updatePlayerInfo(players);
    this.displayPlayerTurn(currentPlayer);

  },

  updateRound(round) {
    $('.round-counter').text(`Round #${round}`);
  },

  displayPuzzleCategory(currentCategory) {
    $('.category-name').text(currentCategory);
  },

  updatePlayerInfo(players) {
    // $(`.player-${players}`)
    players.forEach((player, idx) => {
      $('.player-info').append(
        `<div class="player-info-toggle"> <p class="player-name player-name-${i}"> ${
          player.playerName
          } </p><p class="round-score player${i}-score"> $${
          player.roundScore
          } </p> <p class="total-score"> Account Total: $${player.totalScore} </p></div>`)
      });
  },

  updateRoundScore(player, roundScore) {
    $(`.player-${player}-score`).text(`$${roundScore}`);
  },

  displayPlayerTurn(currentPlayer) {
    $(`.player-${currentPlayer}-container`).addClass('current-turn');
  },

  removePlayerTurn(currentPlayer) {
    $(`.player-${currentPlayer}-container`).removeClass('current-turn');
  },

  // displayRoundPhrase(board, answer, idx) {
  //   let word = answer.correct_answer.split('-').join(' ').toUpperCase();
  //   for (let i = idx; i < idx + word.length; i++) {
  //     $('.letter-block').eq(i).text(word.split('')[i - idx]).addClass('answer-block');
  //     console.log(idx);
  //   }
  // },

  displayBuyConsonant() {
    $('.choose-consonant').css("visibility", "visible");
    $('.wheel').css('transform', '');
  },

  displayBuyVowel() {
    $('.choose-vowel').css("visibility", "visible");
  },

  displayPlayerNames(players) {
    players.forEach((player, idx) => {
      $(`.player-${idx+1}-name`).text(`${player.name}`);
    });
  },

  hideStartPage() {
    $('.start-page').css("visibility", "hidden");
  },

  resetGameBoard() {
    // Clear the game board ...
  },

  showWinner(winnerPlayer) {
    $('.display-winner').show();
    $('.winner-name').text(`${winnerPlayer} won the round!`);
  },

  displayCorrectLetter(letter) {
    if ($('p').text().includes(letter)) {
      $(`p[data-values=${letter}`).removeClass('hidden');
    }
  },

  hideConsonantBoard() {
    $('.choose-consonant').css('visibility', 'hidden');
  },

  showHyphen(blockNumber) {
    $(`.block-${blockNumber}`).children().removeClass('hidden');
    $(`.block-${blockNumber}`).addClass('hidden');
  }
}

export default domUpdates;