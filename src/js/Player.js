class Player {
  constructor(name) {
    this.name = name || 'Player 1';
    this.roundScore = roundScore;
    this.account = account || 0;
    this.turn = turn || false;
    // this.option = option;

  }

  changeTurn() {

  };

  buyAVowel() {
    this.roundScore -= 100;
  };

  addToPlayerScore() {
    this.account += roundScore;
  }

}

  export default Player;