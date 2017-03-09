var MathFunctions= require('../lib/MathFunctions');
var expect = require('chai').expect;
var mf= null;


describe('Testing the tests',function(){

  it('Should pass when everything is ok',function(){
    expect(true).to.be.true;
  });

  it('Should success',function(){
    expect(true).to.be.true;
  });

});


describe('Suma',function(){
  //Carga los metodos del objeto antes de cada 'it'
  beforeEach(function(){
    mf= new MathFunctions();

  });
  it('Deberia sumar dos numeros',function(){

    expect(mf.suma(10,12)).to.equal(22);

  });
});
