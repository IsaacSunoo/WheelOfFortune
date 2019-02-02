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

  addToPlayerAccount() {
    // conditional if player gets bankrupt, lost turn, or a value to add to round score

  }

  bankrupt() {
    this.account = 0;
  }
}

  export default Player;