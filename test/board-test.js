const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

import Board from '../src/js/Board.js';
import domUpdates from '../src/js/domUpdates';
import Game from '../src/js/Game';
import data from '../src/js/data';
import $ from 'jquery';


chai.spy.on(domUpdates,['showHyphen','populateGameBoard','appendLettersToGameBoard'],() => true);


describe('Testing Board methods and properties', () => {
  let board;
  let game;
  
  beforeEach(() => {
    board = new Board();
    game = new Game();
  });

  afterEach(function () {
    // chai.spy.restore(board)
  })
  
  it('should be an instance of Board', () => {
    expect(board).to.be.an.instanceOf(Board);
  });
  
  it ('should have correct default properties', () => {
    expect(board.puzzleData).to.equal(undefined);
    expect(board.roundPuzzle).to.equal(undefined);
    expect(board.roundAnswer).to.equal(undefined);
    expect(board.usedLetters).to.deep.equal([]);
    expect(board.answerLetters).to.deep.equal([]);
    expect(board.vowels).to.deep.equal(['a', 'e', 'i', 'o', 'u']);
  });
  
  
  it('should call checkHyphens',() => {
    board.checkHyphens('-','');
    expect(domUpdates.showHyphen).to.have.been.called(1);
  })

  it('should call appendLettersToGameBoard when populateGameBoard is invoked',() => {
    board.populateGameBoard(data.puzzles.one_word_answers.puzzle_bank[0]);
    expect(domUpdates.appendLettersToGameBoard).to.have.been.called(1);
  })

  it('should call deconstructPuzzle when populateGameBoard is invoked', () =>{
    chai.spy.on(board,['deconstructPuzzle'], () => true)
    board.populateGameBoard(data.puzzles.one_word_answers.puzzle_bank[0]);
    expect(board.deconstructPuzzle).to.have.been.called(1);
  });
});
