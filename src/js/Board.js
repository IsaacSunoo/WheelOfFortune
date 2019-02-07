import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates';

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
        this.answerLetters.forEach((letter, idx) => {
            if (letter === ' ') {
                $('.letter-block').eq(idx).append(`<p class="hidden" data-values=${letter}>${letter}</p>`);
            } else {
                $('.letter-block').eq(idx).append(`<p class="hidden" data-values=${letter}>${letter}</p>`).addClass('answer-block');
            }
        });

        // let idx = 0;
        // this.puzzleData = puzzle;

        // switch (this.puzzleData.number_of_words) {
        //   case 1:
        //   case 2:
        //     let boardText = 14 - this.puzzleData.correct_answer.length;
        //     idx = Math.floor(boardText / 2 + 12);
        //     break;
        //   case 3:
        //     case 4:


        //         break;
        // }


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