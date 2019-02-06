import chai from 'chai';
const expect = chai.expect;

import Wheel from '../src/js/Wheel';
import domUpdates from '../src/js/domUpdates';

describe('Testing Player methods and properties', function () {
  let wheel;
  
  beforeEach(() => {
    wheel = new Wheel
    // wheel.wheelValues = [200,400,600,800,1000];
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
    expect(true).to.equal(true);
  });

  it('should fire spinWheel()', function () {
    expect().to.equal();
  });


});