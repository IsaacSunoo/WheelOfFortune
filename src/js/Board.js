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
        this.roundAnswer = puzzle.correct_answer;
        // let rowOne = 1;
        // let rowTwo = 13;
        // let rowThree = 27;
        // let rowFour = 41;
        // console.log(puzzle);
        // console.log(puzzle.correct_answer);
        this.deconstructPuzzle(puzzle);
        // console.log(this.answerLetters);
        // console.log('WC: ', wordCount);

        let idx = 0;
        this.puzzleData = puzzle;

        switch (this.puzzleData.number_of_words) {
          case 1:
          case 2:
            let boardText = 14 - this.puzzleData.correct_answer.length;
            idx = Math.floor(boardText / 2 + 12);
            break;
          case 3:
            case 4:

                break;
        }
        domUpdates.displayRoundPhrase(this, this.puzzleData, idx);


    //     if (this.characterCount < 7 && puzzle.correct_answer === 1) {
    //         rowTwo = 15;
    //     } else if (this.characterCount < 13) {
    //         rowTwo = 14;
    //     }
    //     this.answerLetters.forEach((word, idx) => {
    //         if (wordCount === 1) {
    //             word.forEach(character => {
    //                 domUpdates.populateHiddenLetters(character, rowTwo);
    //                 this.checkHyphens(character, rowTwo);
    //                 rowTwo++;
    //             });
    //         }
    //     });
    }



    deconstructPuzzle(puzzle) {
        let currentAnswer = puzzle.correct_answer.toUpperCase();
        this.answerLetters = currentAnswer.split('');
    }

    checkHyphens(character, boardPosition) {
        if (character === '-') {
            domUpdates.showHyphen(boardPosition);
        }
    }


}

export default Board;