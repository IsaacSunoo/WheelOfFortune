import Game from './Game'

class Player {
  constructor(name, turn) {
    this.name = name || 'Player 1';
    this.roundScore =  0;
    this.account = 0;
  };

  changeTurn() {
  };

  buyAVowel() {
    this.roundScore -= 100;
  };

  addToPlayerScore(spinValue) {
    if (roundValue === 'LOSE A TURN') {
      game.updateCurrentPlayer();
    } else if (roundValue === 'BANKRUPT') {
      this.roundScore();
      game.updateCurrentPlayer();
    } else {
      this.roundScore += spinValue;
    }
  };

  clearRoundScore() {
    this.roundScore = 0;
  };

  addTotalScore() {
    this.totalScore += this.roundScore;
  };

}

  export default Player;