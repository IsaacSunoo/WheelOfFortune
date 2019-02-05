import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates';

class Board {
    constructor() {
        this.puzzleData;
        this.roundPuzzle;
        this.roundAnswer;
        this.usedLetters = [];
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    populateGameBoard(puzzle) {
        let instanceDomUpdates = new domUpdates();
        let idx = 0
        this.puzzleData = puzzle;
        console.log('puzzle answer: ', this.puzzleData.correct_answer);

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

        instanceDomUpdates.displayRoundPhrase(this, this.puzzleData, idx);

    }


}

export default Board;