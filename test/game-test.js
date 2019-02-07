import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/js/Game.js';
import domUpdates from '../src/js/domUpdates';
import Wheel from '../src/js/Wheel';
import $ from 'jquery';

chai.spy.on(domUpdates,['initiateGame','selectRandomPuzzle','spinWheel','displayPuzzleCategory','displayPlayerTurn', 'updateRound'],() => true);

describe('Testing Game methods and properties', () => {
  let game;
  
  beforeEach(() => {
    game = new Game();
    game.currentPuzzle = {};

  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it ('should have correct default properties', () => {
    expect(game.players).to.deep.equal([]);
    expect(game.currentAnswer).to.equal('');
    expect(game.currentRound).to.equal(1);
    expect(game.currentPlayer).to.equal(0);
    expect(game.currentPuzzle).to.deep.equal({});
    expect(game.roundAnswer).to.equal('');
    expect(game.puzzleLettersArr).to.deep.equal([]);
    expect(game.highestScore).to.equal(0);
    expect(game.winner).to.equal('');
    expect(game.roundWheel).to.equal(undefined);
  });

  it('should invoke every domUpdate when initializeGame is called', () => {
    game.initiateGame();
    expect(domUpdates.spinWheel).to.have.been.called(1)
    expect(domUpdates.displayPuzzleCategory).to.have.been.called(1)
    expect(domUpdates.displayPlayerTurn).to.have.been.called(1)
    expect(domUpdates.updateRound).to.have.been.called(1)
  });

  it('should retrieve the category', () => {
    game.currentPuzzle = {
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8,
      description:'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    },
    expect(game.retrieveCategory()).to.equal('Around The House')
  });

  it('should return currentPuzzle when selectRandomPuzzle is invoked', () => {
    game.selectRandomPuzzle();
    expect(game.currentPuzzle).to.deep.equal(game.currentPuzzle);
  });

});
