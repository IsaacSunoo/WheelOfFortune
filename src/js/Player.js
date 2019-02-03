class Player {
  constructor(name) {
    this.name = name || 'Player 1';
    this.roundScore = roundScore || 0;
    this.account = account || 0;
    this.turn = turn || false;
    // this.option = option;
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


}
console.log("Player is connected");

  export default Player;