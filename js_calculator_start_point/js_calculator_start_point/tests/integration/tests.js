var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have a working add function', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5');
  })

   it('should have a working subtract function', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number8')).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number1')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('7');
   })

   it('should have a working multiply function', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number5')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number3')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('15');
   })

   it('should have a working divide function', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number8')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('4');
   })

   it('should be able to chain multiple operations', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number4")).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number5')).click();
     element(by.css('#operator_add')).click();
     element(by.css("#number5")).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('150');
   })

   it('should return a negative if subtracting more than value', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number5")).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number6')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('-1');
   })

   it('should return a decimal', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number9")).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number5')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('1.8');
   })

   it('should be able to handle very large numbers', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number2')).click();
     element(by.css('#number3')).click();
     element(by.css('#number4')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number5')).click();
     element(by.css('#number6')).click();
     element(by.css('#number7')).click();
     element(by.css('#number8')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('1328652');
   })

   //code updated so if a number is divided by zero the calculator returns zero and not infinity
   it('should return 0 when any number is divided by 0', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number8')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number0')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('0');
   })

});