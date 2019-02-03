import Wheel from './Wheel'

class Game {
  constructor(players, currentPuzzle) {
    this.players = players;
    this.currentPuzzle = currentPuzzle;
    this.round = round || 1;
    this.puzzleLettersArray = [];
    this.currentPlayer = 0;
    this.highestScore = 0;
    this.roundAnswer = '';
  };

  initiateGame() {

  }

  quitResetGame() {

  };

  changeBank() {

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


}


export default Game;


