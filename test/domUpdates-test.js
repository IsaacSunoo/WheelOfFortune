import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import domUpdates from '../src/js/domUpdates';

describe('domUpdate', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
