import Wheel from './Wheel.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data.js';
import Board from './Board.js';
import BonusWheel from './BonusWheel.js';

class Game {
  constructor(players) {
    this.players = [];
    this.currentAnswer = '';
    this.currentRound = 1;
    this.currentPlayer = 1;
    this.currentPuzzle = {};
    this.roundAnswer = '';
    this.puzzleLettersArr = [];
    this.highestScore = 0;
    this.winner = '';
    this.roundWheel;

  };

  initiateGame() {
    let board = new Board;
    let domUpdatesInstance = new domUpdates;
    let puzzle = this.selectRandomPuzzle();
    domUpdatesInstance.spinWheel();
    board.populateGameBoard(puzzle);
    this.deconstructPuzzle(puzzle);
    domUpdatesInstance.displayPuzzleCategory(this.retrieveCategory());
    domUpdatesInstance.displayPlayerTurn(this.currentPlayer);
  }

  selectRandomPuzzle() {
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0) {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.one_word_answers);
    } else if (randomNum === 1) {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.two_word_answers);
    } else if (randomNum === 2) {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.three_word_answers);
    } else {
      return this.currentPuzzle = this.selectRandomQuestion(data.puzzles.four_word_answers);
    }
  }

  selectRandomQuestion(questions) {
    let selectQuestion = Math.floor(Math.random() * 24);
    let puzzleBank = questions.puzzle_bank;
    return puzzleBank[selectQuestion];
  }

  deconstructPuzzle(puzzle) {
    this.currentAnswer = puzzle.correct_answer.toUpperCase();
    this.puzzleLettersArr = this.currentAnswer.split('');
    // console.log('Current Answer: ' + this.currentAnswer);
    // console.log(this.puzzleLettersArr);
  }

  incrementRound() {
    this.round += round;
  };

  retrieveCategory() {
    let category = this.currentPuzzle.category;
    return category;
  }

  checkLetterGuess(letter) {
    let domUpdateInstance = new domUpdates();
    if (this.roundAnswer.includes(letter)) {
      this.players[this.currentPlayer].addToPlayerScore(this.roundWheel.currentSpin);
      determineBonusRound();
      domUpdateInstance.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdateInstance.displayCorrectLetter(letter);
    } else {
        this.updateCurrentPlayer();
      }
    }

  checkVowelGuess(guess) {
    let domUpdateInstance = new domUpdates();
    if (this.roundAnswer.includes(letter)) {
      this.players[this.currentPlayer].buyAVowel();
      this.determineBonusRound();
      domUpdateInstance.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdateInstance.displayCorrectLetter(letter);
    } else {
      this.players[this.currentPlayer].buyAVowel();
      domUpdateInstance.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      this.updateCurrentPlayer();
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
      domupdates.resetGameBoard();
    } else {
      this.updateCurrentPlayer();
    }
  }

  updateCurrentPlayer() {

  }

  startNewRound() {
    // this.currentRound++;
    this.players.forEach(player => {
      player.clearRoundScore();
    });
    domUpdates.displayNewRound(++this.currentRound, this.players, this.currentPlayer);
    if (this.currentRound === 4) {
      this.bonusWheel = new BonusWheel();
      this.createBonusWheelValues();
      this.populateGameBoard(this.selectRandomPuzzle());
      this.startBonusRound();
    } else if (this.currentRound > 4) {
      domUpdates.showWinner(currentGame.players[currentGame.currentPlayer].name);
    } else {
      let board = new Board();
      this.newRoundWheel = new Wheel();
      let domUpdateInstance = new domUpdates();
      let puzzle = this.selectRandomPuzzle();
      domUpdateInstance.spinWheel();
      board.populateGameBoard(puzzle);
      this.deconstructPuzzle(puzzle);
      domUpdateInstance.displayPuzzleCategory(this.retrieveCategory());
      domUpdateInstance.displayPlayerTurn(this.currentPlayer);
    }
    console.log(this.currentAnswer);
  }

  startBonusRound() {
    const totalScoreArr = this.players.map(player => {
      return player.totalScore;
    });

    this.highestScore = totalScoreArr.sort((a, b) => {
      return b - a;
    })[0];

    let bonusRoundPlayer = this.players.filter(player => {
      return this.highestScore === player.totalScore;
    })[0];
    currentGame.displayBonusLetters();
  }

  displayBonusLetters() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let skipConsonant = false;

  }



}


export default Game;


