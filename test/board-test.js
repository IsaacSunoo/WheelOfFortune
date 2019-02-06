import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Board from '../src/js/Board.js';

describe('Testing Board methods and properties', () => {
  let board;
  
  beforeEach(() => {
    board = new Board();
  });

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

  

});
