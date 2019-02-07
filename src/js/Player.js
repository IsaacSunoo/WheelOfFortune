import Game from './Game'

class Player {
  constructor(name) {
    this.name = name || 'Player 1';
    this.roundScore =  0;
    this.account = 0;
  };

  buyAVowel() {
    this.roundScore -= 100;
  };

  addToPlayerScore(spinValue) {
    if (spinValue === 'LOSE A TURN') {
      game.updateCurrentPlayer();
    } else if (spinValue === 'BANKRUPT') {
      this.clearRoundScore();
      game.updateCurrentPlayer();
    } else {
      this.roundScore += spinValue;
    }
  };

  clearRoundScore() {
    this.roundScore = 0;
  };

  addTotalScore() {
<<<<<<< HEAD
    this.account += this.roundScore;
  }
=======
    this.totalScore += this.roundScore;
  };
>>>>>>> 6ce9d970112008fc472fe613e096ff4f88bc4173

}

  export default Player;