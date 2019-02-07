import chai from 'chai';
const expect = chai.expect;

import Player from '../src/js/Player';

describe('Testing Player methods and properties', function () {
  let player;
  
  beforeEach(() => {
    player = new Player('Requis');
    player.roundScore = 1000;
    player.totalScore = 2000;
  });

  it('should be an instance of Player', () => {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('should reduce round score by 100', function () {
    player.buyAVowel();
    expect(player.roundScore).to.equal(900);
  });

  it('should clear score to 0', function () {
    player.clearRoundScore();
    expect(player.roundScore).to.equal(0);
  });

  it('should give a total score', function () {
    player.addTotalScore();
    expect(player.totalScore).to.equal(player.roundScore += player.account);
  });


});
