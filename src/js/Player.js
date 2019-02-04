import Game from './Game'

class Player {
  constructor(name, turn) {
    this.name = name || 'Player 1';
    this.roundScore =  0;
    this.account = 0;
    this.turn = turn || false;
    
  }

  addPlayerName() {
    let $name1 = `${'.player-1-box'}`;
    let $name2 = `${'.player-2-box'}`;
    let $name3 = `${'.player-3-box'}`;
    
    for (let i = 1; i < 4; i++){
      let player
    }
  }

  changeTurn() {}

  buyAVowel() {
    this.roundScore -= 100;
  }

  addToPlayerScore(roundValue) {
    // conditional if player gets bankrupt, lost turn, or a value to add to round score
    if (roundValue === 'LOSE A TURN' ) {
      // Skip turn on player
    } else if (roundValue === 'BANKRUPT') {
      // Set player round score to 0
    } else {
      this.roundScore += roundValue;
    }
  }

  clearRoundScore() {
    this.roundScore = 0;
  }


}

  export default Player;