import Wheel from './Wheel.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js';
import data from './data.js';
import Board from './Board.js';
import BonusWheel from './BonusWheel.js';

class Game {
  constructor(players) {
    this.players = players || [];
    this.currentAnswer = '';
    this.currentRound = 1;
    this.currentPlayer = 0;
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
    board.populateGameBoard(puzzle);
    domUpdates.displayPuzzleCategory(this.retrieveCategory());
    domUpdates.displayPlayerTurn(this.currentPlayer);
    domUpdates.updateRound(this.currentRound);
  }

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
    if (this.roundAnswer.toUpperCase().includes(guess)) {
      console.log('Round score', this.roundWheel.currentSpin);
      this.players[this.currentPlayer].addToPlayerScore(this.roundWheel.currentSpin);
      domUpdates.displayCorrectLetter(guess);
      this.determineBonusRound();
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
    } else {
        this.updateCurrentPlayer();
      }
    }

  checkVowelGuess(guess) {
    console.log('vowel guess', guess);
    this.players[this.currentPlayer].buyAVowel();
    if (this.roundAnswer.toUpperCase().includes(guess)) {
      this.determineBonusRound();
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      domUpdates.displayCorrectLetter(guess);
    } else {
      domUpdates.updateRoundScore(this.currentPlayer, this.players[this.currentPlayer].roundScore);
      this.updateCurrentPlayer();
    }
  };

  determineBonusRound() {
    if (this.currentRound == 4) {
      this.players.forEach(player => {
        player.clearRoundScore();
      });
    }
  }

  checkPlayerGuess(guess) {
    if (guess.toUpperCase() === this.currentAnswer.toUpperCase()) {
      this.players[this.currentPlayer].addTotalScore();
      this.startNewRound();
    } else {
      this.updateCurrentPlayer();
    }
  }

  updateCurrentPlayer() {
    domUpdates.removePlayerTurn(this.currentPlayer);
    if (this.currentPlayer === 2) {
      this.currentPlayer = 0;
    } else {
      this.currentPlayer++;
    }
    domUpdates.displayPlayerTurn(this.currentPlayer);

  }

  startNewRound() {
    this.roundWheel.createWheelValues();
    domUpdates.displayAllLetters();
    this.players.forEach(player => {
      player.clearRoundScore();
    });
    domUpdates.displayNewRound(++this.currentRound, this.players, this.currentPlayer, this.currentPuzzle.correct_answer.split(''));
    if (this.currentRound === 4) {
      this.bonusWheel = new BonusWheel();
      let bonusBoard = new Board();
      this.bonusWheel.createBonusWheelValues();
      bonusBoard.populateGameBoard(this.selectRandomPuzzle());
      this.startBonusRound();
    } else if (this.currentRound > 4) {
      domUpdates.showWinner(this.players[this.currentPlayer].name);
    } else {
      let board = new Board();
      let puzzle = this.selectRandomPuzzle();
      console.log('New Round Puzzle: ', puzzle);

      this.answer = puzzle.correct_answer;
      domUpdates.spinWheel();
      this.roundWheel = new Wheel();
      this.roundWheel.createWheelValues();
      board.populateGameBoard(puzzle);
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
    this.displayBonusLetters();
  }

  displayBonusLetters() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let skipConsonant = false;
    this.puzzleLettersArr.forEach(word => {
      word.forEach(character => {
        if (!vowels.includes(character)) {
          if (skipConsonant === false) {
            skipConsonant = !skipConsonant;
          } else {
            this.checkLetterGuess(character);
            skipConsonant = !skipConsonant;
          }
        }
      });
    });
  }



}


export default Game;


