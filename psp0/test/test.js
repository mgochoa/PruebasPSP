var MathFunctions= require('../lib/MathFunctions');
var files=require('../lib/files');
var expect = require('chai').expect;
var mf= null;
var tf=null;


describe('Pruebas operaciones matematicas',function(){

  //Carga los metodos del objeto antes de cada 'it'
  beforeEach(function(){
    mf= new MathFunctions();

  });

  it('Deberia sumar dos numeros',function(){
    expect(mf.suma(10,12)).to.equal(22);

  });

  it('Deberia calcular la media de un grupo de numeros', function(){
    var numberArray=[20,20,20,20,20];
    expect(mf.average(numberArray)).to.equal(20);
  });
});

describe('Pruebas de lectura de archivos',function(){

beforeEach(function(){
  tf=new files();

});
it('Esta funcion deberia leer archivo txt',function(){
  expect(tf.existeDirectorio('../filesTest/')).to.be.true;

});

});