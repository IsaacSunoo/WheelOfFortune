import Wheel from './Wheel.js'
import domUpdates from './domUpdates.js';

class Game {
  constructor(players, currentPuzzle, round) {
    this.players = players;
    this.currentPuzzle = currentPuzzle;
    this.round = round || 1;
    this.puzzleLettersArr = [];
    this.currentPlayer = 0;
    this.highestScore = 0;
    this.roundAnswer = '';

  };

  // 24 one word answers
  // 24 two word answers
  // 24 three word answers
  // 24 four word answers

  selectRandomPuzzle() {

  }

  initiateGame() {
    var domUpdatesInstance = new domUpdates;

      domUpdatesInstance.spinWheel()

  }

  quitResetGame() {

  };

  incrementRound() {
    this.round += round;
  };

  loseATurn() {

  };

  choosePuzzle() {

  };

  checkLetterPresent(letter) {
    if (this.roundAnswer.includes(letter)) {
      this.players[this.currentPlayer].addToPlayerScore(this.roundWheel.currenSpin);
      // Change players round score in dom to update player
      // Display the players guess on the board if the letter is on the board
    }

  }

  chooseConstanant() {

  };

  checkConstanant() {

  };

  checkVowel() {

  };

  updateAccount() {

  };

  determineWinner() {

  };

  startNewRound() {
    // increment round by one and clear player round scores
    this.currentRound++;
    this.players.forEach(player => {
      clearRoundScore();
    });
    // Display new round info on the dom (round number and winner players score)
    // Determine if round is regular round or bonus round (4 being the bonus)
    // After 3 rounds and bonus round display the winner
  }

  startBonusRound() {

  }


}


export default Game;


