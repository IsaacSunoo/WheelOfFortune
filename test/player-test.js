import chai from 'chai';
const expect = chai.expect;

import chai from 'chai';
const expect = chai.expect;

import Player from '../src/js/Player';


describe('Player', function () {
  let player;
  beforeEach(() => {
    player = new Player('Requis');
    player.roundScore = 1000
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should reduce round score by 100', function () {
    player.buyAVowel();
    expect(player.roundScore).to.equal(900);
  });
});
