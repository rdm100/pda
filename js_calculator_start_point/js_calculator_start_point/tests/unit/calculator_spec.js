var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(10, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    assert.equal(7, calculator.runningTotal);
  });

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.equal(12, calculator.runningTotal);
  });

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(10, calculator.runningTotal);
  });

  it('can handle decimals', function(){
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(4.5, calculator.runningTotal);
  })

  it('can check number click', function(){
      calculator.numberClick(2);
      assert.equal(2, calculator.runningTotal);
  })

  it('can check clear screen', function(){
    calculator.numberClick(5);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  it('can handle large numbers', function(){
    calculator.numberClick(2);
    calculator.numberClick(7);
    calculator.numberClick(6);
    calculator.operatorClick("*");
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.operatorClick('=')
    assert.equal(27600000, calculator.runningTotal);
})
});
