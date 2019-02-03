import Wheel from './Wheel'

class Game {
  constructor(players, currentPuzzle) {
    this.players = players;
    this.currentPuzzle = currentPuzzle;
    this.round = round || 1;
    this.puzzleLettersArray = [];
    this.currentPlayer = 0;
    this.highestScore = 0;
    this.currentAnswer = '';
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

  // checkLetterPresent(letter) {
  //   if (this.currentAnswer.includes(letter)) {
  //     this.players[this.currentPlayer].addToPlayerScore(this.roundWheel.currenSpin);
  //   }
  // }

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


