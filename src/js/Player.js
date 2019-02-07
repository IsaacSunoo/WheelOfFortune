
import Game from './Game';
import $ from 'jquery';


class Player {
  constructor(name) {
    this.name = name || 'Player 1';
    this.roundScore =  0;
    this.account = 0;
  }

  buyAVowel() {
    this.roundScore -= 100;
  }

  addToPlayerScore(spinValue) {
    if (spinValue === 'LOSE A TURN') {
      game.updateCurrentPlayer();
    } else if (spinValue === 'BANKRUPT') {
      this.clearRoundScore();
      game.updateCurrentPlayer();
    } else {
      this.roundScore += spinValue;
    }
  }

  clearRoundScore() {
    this.roundScore = 0;
  }

  addTotalScore() {
    this.account += this.roundScore;
  }

}

  export default Player;