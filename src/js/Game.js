import Wheel from './Wheel.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data.js';

class Game {
  constructor(players) {
    this.players = [];
    this.currentAnswer = '';
    this.currentRound = 1;
    this.currentPlayer = 0;
    this.currentPuzzle = {};
    this.puzzleLettersArr = [];
    this.answerLetters = [];
    this.highestScore = 0;
    this.roundAnswer = '';

  };

  initiateGame() {
    var domUpdatesInstance = new domUpdates;
    domUpdatesInstance.spinWheel()
  }

  selectRandomPuzzle() {
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0) {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.one_word_answers);
    } else if (randomNum === 1) {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.two_word_answers);
    } else if (randomNum === 2) {
      return this.selectRandomQuestion(data.puzzles.three_word_answers);
    } else {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.four_word_answers);
    }
  }

  selectRandomQuestion(questions) {
    let selectQuestion = Math.floor(Math.random() * 24);
    let puzzleBank = questions.puzzle_bank;
    return puzzleBank[selectQuestion];
  }

  deconstructPuzzle() {
    let currentPuzzle = this.selectRandomPuzzle();
    this.currentAnswer = currentPuzzle.correct_answer.toUpperCase();
    this.puzzleLettersArr = this.currentAnswer.split('');

    console.log(currentPuzzle);
    console.log('Current Answer: ' + this.currentAnswer);
    console.log(this.puzzleLettersArr);
  }

  quitResetGame() {

  };

  incrementRound() {
    this.round += round;
  };

  loseATurn() {

  };

  retrieveCategory() {
    let category = this.currentPuzzle.category;
    return category;
  }

  checkLetterGuess(letter) {
    if (this.roundAnswer.includes(letter)) {
      this.players[this.currentPlayer].addToPlayerScore(this.roundWheel.currentSpin);
      determineBonusRound();
      }
      // Change players round score in dom to update player
      // Display the players guess on the board if the letter is on the board
    }

  checkVowelGuess(guess) {
    buyAVowel();
    if (guess.toUpperCase() === this.currentAnswer) {
      // display vowels on board
    }
  };

  determineBonusRound() {
    if (currentRound == 4) {
      this.players.forEach(player => {
        player.clearRoundScore();
      });
    }
  }

  checkPlayerGuess(guess) {
    if (guess.toUpperCase() === this.currentAnswer.toUpperCase()) {
      this.players[this.currentPlayer].addTotalScore();
      this.startNewRound();
      // Remove the guessed letters from the board
      // Stubbed out updateCurrentPlayer method to call
    } else {

    }
  }

  updateCurrentPlayer() {

  }

  updateAccount() {

  };

  startNewRound() {
    // increment round by one and clear player round scores
    // this.currentRound++;
    this.players.forEach(player => {
      player.clearRoundScore();
    });
    domUpdates.displayNewRound(++this.currentRound, this.players, this.currentPlayer);


    // Display new round info on the dom (round number and winner players score)
    // Determine if round is regular round or bonus round (4 being the bonus)
    // After 3 rounds and bonus round display the winner
  }

  startBonusRound() {

  }


}


export default Game;


