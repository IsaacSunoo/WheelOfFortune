import Wheel from './Wheel.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data.js';
import Board from './Board.js';
import BonusWheel from './BonusWheel.js';
import $ from 'jquery';

class Game {
  constructor(players) {
    this.players = players || [];
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
    let puzzle = this.selectRandomPuzzle();
    this.answer = puzzle.correct_answer;
    domUpdates.spinWheel();
    this.roundWheel = new Wheel();
    this.roundWheel.createWheelValues();
    // this.roundWheel.spinWheel();
    board.populateGameBoard(puzzle);
    domUpdates.displayPuzzleCategory(this.retrieveCategory());
    domUpdates.displayPlayerTurn(this.currentPlayer);
    domUpdates.updateRound(this.currentRound);
  }

  // getRoundWheelValues() {
  //   this.roundWheel = domUpdates.spinWheel();
  // }

  selectRandomPuzzle() {
    let randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0) {
      this.currentPuzzle = this.selectRandomQuestion(data.puzzles.one_word_answers)
      this.currentAnswer = this.currentPuzzle.correct_answer;
      return this.currentPuzzle;
    } else if (randomNum === 1) {
      this.currentPuzzle = this.selectRandomQuestion(data.puzzles.two_word_answers);
      this.currentAnswer = this.currentPuzzle.correct_answer;
      return this.currentPuzzle;
    } else if (randomNum === 2) {
      this.currentPuzzle = this.selectRandomQuestion(data.puzzles.three_word_answers);
      this.currentAnswer = this.currentPuzzle.correct_answer;
      return this.currentPuzzle;
    } else {
      this.currentPuzzle = this.selectRandomQuestion(data.puzzles.four_word_answers);
      this.currentAnswer = this.currentPuzzle.correct_answer;
      return this.currentPuzzle;
    }
  }

  selectRandomQuestion(questions) {
    let selectQuestion = Math.floor(Math.random() * 24);
    let puzzleBank = questions.puzzle_bank;
    this.roundAnswer = puzzleBank[selectQuestion].correct_answer;
    console.log(this.roundAnswer);
    return puzzleBank[selectQuestion];
  }

  retrieveCategory() {
    let category = this.currentPuzzle.category;
    return category;
  }

  checkLetterGuess(guess) {
    console.log(guess);

    if (this.roundAnswer.toUpperCase().includes(guess)) {
      console.log('Round score', this.roundWheel.currentSpin);
      this.players[this.currentPlayer].addToPlayerScore(this.roundWheel.currentSpin);
      domUpdates.displayCorrectLetter(guess);
      // this.determineBonusRound();
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
    } else {
        this.updateCurrentPlayer();
      }
    }

  checkVowelGuess(guess) {
    console.log('vowel guess', guess);
    this.players[this.currentPlayer].buyAVowel();
    if (this.roundAnswer.toUpperCase().includes(guess)) {
      // this.determineBonusRound();
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdates.displayCorrectLetter(guess);
    } else {
      // this.players[this.currentPlayer].buyAVowel();
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      this.updateCurrentPlayer();
    }
  };

  determineBonusRound() {
    if (this.currentRound == 4) {
      this.players.forEach(player => {
        player.clearRoundScore();
      e});
    }
  }

  checkPlayerGuess(guess) {
    console.log('guess', guess);
    console.log('current answer player guess', this.currentAnswer)
    if (guess.toUpperCase() === this.currentAnswer.toUpperCase()) {
      console.log('Player guessed the correct answer');

      this.players[this.currentPlayer].addTotalScore();
      this.startNewRound();
      domupdates.resetGameBoard();
    } else {
      this.updateCurrentPlayer();
    }
  }

  updateCurrentPlayer() {
    domUpdates.removePlayerTurn(this.currentPlayer);
    if (this.currentPlayer === 3) {
      this.currentPlayer = 1;
    } else {
      this.currentPlayer++;
    }
    domUpdates.displayPlayerTurn(this.currentPlayer);

  }

  startNewRound(Wheel) {
    this.roundWheel.createWheelValues();
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
      let puzzle = this.selectRandomPuzzle();
      wheel.spinWheel();
      board.populateGameBoard(puzzle);
      this.deconstructPuzzle(puzzle);
      domUpdates.displayPuzzleCategory(this.retrieveCategory());
      domUpdates.displayPlayerTurn(this.currentPlayer);
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


