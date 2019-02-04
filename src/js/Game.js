import Wheel from './Wheel.js'
import domUpdates from './domUpdates.js';
import data from './data.js';
import Player from './Player.js'

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

  selectRandomPuzzle() {
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0) {
      this.selectRandomQuestion(data.puzzles.one_word_answers);
    } else if (randomNum === 1) {
      this.selectRandomQuestion(data.puzzles.two_word_answers);
    } else if (randomNum === 2) {
      this.selectRandomQuestion(data.puzzles.three_word_answers);
    } else {
      this.selectRandomQuestion(data.puzzles.four_word_answers);
    }
  }

  selectRandomQuestion(questions) {
    let selectQuestion = Math.floor(Math.random() * 24);
    let puzzleBank = questions.puzzle_bank;
    console.log(puzzleBank[selectQuestion]);
  }

  initiateGame() {
    
    let player1 = new Player();

    
    
    
    var domUpdatesInstance = new domUpdates;

      domUpdatesInstance.spinWheel()

  }

  quitResetGame() {
    $(".spin-btn").on("click", () => {
      $(".wheel").css("transform", "rotate(720deg)");
        });
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


