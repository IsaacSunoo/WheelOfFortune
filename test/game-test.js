import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/js/Game.js';

describe('Testing Game methods and properties', () => {
  let game;
  
  beforeEach(() => {
    game = new Game();
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it ('should have correct default properties', () => {
    expect(game.players).to.deep.equal([]);
    expect(game.currentAnswer).to.equal('');
    expect(game.currentRound).to.equal(1);
    expect(game.currentPlayer).to.equal(1);
    expect(game.currentPuzzle).to.deep.equal({});
    expect(game.roundAnswer).to.equal('');
    expect(game.puzzleLettersArr).to.deep.equal([]);
    expect(game.highestScore).to.equal(0);
    expect(game.winner).to.equal('');
    expect(game.roundWheel).to.equal(undefined);
  });
});
