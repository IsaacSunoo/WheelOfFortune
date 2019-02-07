import Wheel from './Wheel';
import Data from './data';

const domUpdates = {

    spinWheel(color) {
      this.updateColorValue();
      switch(color) {
          case 0:
            $(".wheel").css("transform", "rotate(720deg)");
          break;
          case 1:
            $(".wheel").css("transform", "rotate(780deg)");
          break;
          case 2:
            $(".wheel").css("transform", "rotate(840deg)");
          break;
          case 3:
            $(".wheel").css("transform", "rotate(900deg)");
          break;
          case 4:
            $(".wheel").css("transform", "rotate(960deg)");
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

  displayNewRound(currentRound, players, currentPlayer, lettersArr) {
    this.resetGameBoard(lettersArr);
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
    players.forEach((player, idx) => {
      $(`.player-${idx+1}-account`).text(`Account Total: $${player.account}`);
      $(`.player-${idx + 1}-score`).text('$ 0');
      });
  },

  updateRoundScore(player, roundScore) {
    $(`.player-${player+1}-score`).text(`$${roundScore}`);
  },

  displayPlayerTurn(currentPlayer) {
    $(`.player-${currentPlayer + 1}-container`).addClass('current-turn');
    // $(`.player-${currentPlayer + 1}-name`).addClass('name-animate');
  },

  removePlayerTurn(currentPlayer) {
    $(`.player-${currentPlayer + 1}-container`).removeClass('current-turn');
    // $(`player-${currentPlayer + 1}-name`).removeClass('name-animate');
  },

  displayBuyConsonant() {
    $('.choose-consonant').css("visibility", "visible");
    $('.wheel').css('transform', '');
  },

  clearInputBlock() {
    $('.guess-input').val('');
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

  resetGameBoard(letterArr) {
    $('p').remove();
    letterArr.forEach(letter => {
      if (letter === ' ') {
        $('.letter-block').prepend(`<p class="hidden" data-values=${letter}>${letter}</p>`);
      } else {
        $('.letter-block').prepend(`<p class="hidden" data-values=${letter}>${letter}</p>`).removeClass('answer-block');
      }
    });
  },

  showWinner(winnerPlayer) {
    $('.wof-game').hide();
    $('.display-winner').show();
    $('.winner-name').text(`${winnerPlayer} IS THE WINNER!`);
  },

  displayCorrectLetter(letter) {
    if ($('p').text().includes(letter)) {
      $(`p[data-values=${letter}`).removeClass('hidden');
    }
  },

  hideConsonantBoard() {
    $('.choose-consonant').css('visibility', 'hidden');
  },

  hideVowelBoard() {
    $('.choose-vowel').css('visibility', 'hidden');
  },

  hideUsedLetter(letter) {
    $(`.letter-${letter}`).addClass('hide');
  },

  displayAllLetters() {
    for (let i = 0; i < 21; i++) {
      $('.choose-letter').removeClass('hide');
    }
    for (let i = 0; i < 7; i++) {
      $('.choose-vowel-letter').removeClass('hide');
    }
  },

  showHyphen(blockNumber) {
    $(`.block-${blockNumber}`).children().removeClass('hidden');
    $(`.block-${blockNumber}`).addClass('hidden');
  }
}

export default domUpdates;