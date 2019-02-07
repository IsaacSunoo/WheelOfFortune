import data from "./data";
import Wheel from './Wheel.js';

class BonusWheel extends Wheel {
    constructor(wheelValues, currentSpin) {
        super(wheelValues, currentSpin);
        this.letterToDisplay = ['R', 'S', 'T', 'L', 'N', 'E'];
        this.bonusWheelValues = [100, 500, 1000, 20000, 8, 1000000000];
        this.bonusAnswer;
    }

    createBonusValues() {
        for (let i = 0; i < 6; i++) {
            let randomNum = Math.floor(Math.random() * 6);
            this.wheelValues.push(this.bonusWheelValues[randomNum]);
        }
    }

    displayBonusLetters(puzzle, bonusAnswerLetters) {
        this.bonusAnswer = puzzle.correct_answer.toUpperCase();
        bonusAnswerLetters.forEach((letterBonus, idx) => {
            this.letterToDisplay.forEach(letterDisplay => {
                if (letterBonus === ' ') {
                    if ($('.letter-block').eq(idx) !== '') {
                        $('.letter-block').eq(idx).append(`<p data-values=${letterBonus}>${letterBonus}</p>`);
                    }
                } else if (letterBonus === '-') {
                    if ($('.letter-block').eq(idx) !== '') {
                        $('.letter-block').eq(idx).append(`<p data-values=${letterDisplay}>${letterDisplay}</p>`);
                    }
                } else if (letterBonus === letterDisplay) {
                    if ($('.letter-block').eq(idx) !== '') {
                        $('.letter-block').eq(idx).append(`<p data-values=${letterBonus}>${letterBonus}</p>`).addClass('answer-block');
                    }
                } else {
                    if ($('.letter-block').eq(idx) !== '') {
                        $('.letter-block').eq(idx).append(`<p class="hidden" data-values=${letterBonus}>${letterBonus}</p>`).addClass('answer-block');
                    }
                }
            });

        });
    }
}

export default BonusWheel;