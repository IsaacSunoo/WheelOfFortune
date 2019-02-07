import chai from 'chai';
const expect = chai.expect;

import Wheel from '../src/js/Wheel';
import domUpdates from '../src/js/domUpdates';

describe('Testing Player methods and properties', function () {
  let wheel;
  
  beforeEach(() => {
    wheel = new Wheel();
  });

  it('should be an instance of Wheel', () => {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });

  it('should have the correct default properties', function () {
    expect(wheel.wheelValues).to.deep.equal([])
    expect(wheel.currentSpin).to.equal(undefined);
    expect(wheel.wheelSpinValue).to.equal(undefined);
  });

  it('should create wheel values', function () {
    expect(wheel.wheelValues.length).to.equal(0);
  });

  it('should fire spinWheel()', function () {
    expect(wheel.wheelSpinValue).to.equal(wheel.randomNum);
  });


});