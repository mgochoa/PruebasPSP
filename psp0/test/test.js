var MathFunctions= require('../lib/MathFunctions');
var expect = require('chai').expect;
var mf= null;


describe('Pruebas operaciones matematicas',function(){

  //Carga los metodos del objeto antes de cada 'it'
  beforeEach(function(){
    mf= new MathFunctions();

  });

  it('Deberia sumar dos numeros',function(){
    expect(mf.suma(10,12)).to.equal(22);
  });

  it('Deberia calcular la media de un grupo de numeros', function(){
    expect(mf.average(numberArray)).to.equal(20);
  });
});
