import Wheel from './Wheel.js'
import domUpdates from './domUpdates.js';
import data from './data.js';

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
      return this.selectRandomQuestion(data.puzzles.one_word_answers);
    } else if (randomNum === 1) {
      return this.selectRandomQuestion(data.puzzles.two_word_answers);
    } else if (randomNum === 2) {
      return this.selectRandomQuestion(data.puzzles.three_word_answers);
    } else {
      return this.selectRandomQuestion(data.puzzles.four_word_answers);
    }
  }

  selectRandomQuestion(questions) {
    let selectQuestion = Math.floor(Math.random() * 24);
    let puzzleBank = questions.puzzle_bank;
    return puzzleBank[selectQuestion];
    // console.log(puzzleBank[selectQuestion]);
  }

  initiateGame() {
    var domUpdatesInstance = new domUpdates;

      domUpdatesInstance.spinWheel()

  }

  deconstructPuzzle() {
    let currentPuzzle = this.selectRandomPuzzle();
    let currentAnswerSplit = currentPuzzle.correct_answer.split('');

    console.log(currentPuzzle.correct_answer);
    console.log(currentAnswerSplit);

  }

  populateGameBoard() {

  }

  quitResetGame() {

  };

  incrementRound() {
    this.round += round;
  };

  loseATurn() {

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


