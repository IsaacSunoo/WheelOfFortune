import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates';
import $ from 'jquery';

class Board {
    constructor() {
        this.puzzleData;
        this.roundPuzzle;
        this.roundAnswer;
        this.usedLetters = [];
        this.answerLetters = [];
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    populateGameBoard(puzzle) {
        let wordCount = puzzle.number_of_words;
        this.roundAnswer = puzzle.correct_answer.toUpperCase();
        this.answerLetters = this.deconstructPuzzle(puzzle);
        domUpdates.appendLettersToGameBoard(this.answerLetters);
            
    }

    deconstructPuzzle(puzzle) {
        let currentAnswer = puzzle.correct_answer.toUpperCase();
        return this.answerLetters = currentAnswer.split('');
    }

    checkHyphens(character, boardPosition) {
        if (character === '-') {
            domUpdates.showHyphen(boardPosition);
        }
    }


}

export default Board;