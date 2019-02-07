const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);
const expect = chai.expect;

import Board from '../src/js/Board.js';
import domUpdates from '../src/js/domUpdates';
import Game from '../src/js/Game';


chai.spy.on(domUpdates,'checkHyphens','populateGameBoard',() => true);

describe('Testing Board methods and properties', () => {
  let board;
  
  beforeEach(() => {
    board = new Board();
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
    domUpdates.showHyphen();
    expect(domUpdates.showHyphen()).to.have.been.called();
  })

  it('should call populateGameBoard',() => {
    domUpdates.populateGameBoard();
    expect(chai.spy).to.have.been.called();
  })

  

});
