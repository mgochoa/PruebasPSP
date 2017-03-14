var MathFunctions = require('../lib/MathFunctions');
var files = require('../lib/files');
var linkedList = require('../lib/linkedList');
var expect = require('chai').expect;
var mf = null;
var tf = null;
var ll = null;
var numberArray = null;

describe('Pruebas operaciones matematicas', function() {
    //Carga los metodos del objeto antes de cada 'it'
    beforeEach(function() {
        mf = new MathFunctions();
        ll = new linkedList();
        numberArray = [10, 15, 30, 40, 5];
    });

    it('Deberia sumar dos numeros', function() {
        expect(mf.suma(10, 12)).to.equal(22);
    });

    it('Deberia calcular la media de un grupo de numeros', function() {
        expect(mf.average(numberArray)).to.equal(20);
    });
    
    it('Deberia calcular la desviacion estandar de un grupo de numeros', function() {
        expect(mf.standardDeviation(numberArray)).to.equal(13.03);
    });
    //TODO: Develop this test.
    it('Debería calcular la media de un grupo de numeros en una lista ligada', function() {
        numberArray.forEach(function(a) {
            ll.add(a);
        });
        expect(mf.averageLl(ll)).to.equal(20);
    });
    //TODO: Develop this test.
    it('Debería calcular la desviacion estandar de un grupo de numeros en una lista ligada', function() {
        numberArray.forEach(function(a) {
            ll.add(a);
        });
        expect(mf.standardDeviationLl(ll)).to.equal(13.03);
    });

});

describe('Pruebas de lectura de archivos', function() {
    var fileTest = '10;15;30;40;5;20';
    var pathTestFile = 'test/Archivo.txt';
  //var pathTestFile = 'test/badFile.txt';
    var firstFileTest = null;
    var myLl;

    beforeEach(function(done) {
        tf = new files();
        mf = new MathFunctions();
        tf.readCsvFile(pathTestFile, function(err, content) {
            if(err){
                throw err;
            }
            myLl = content;
            done();
        });
    });
    //TODO: Develop this test.
    it('Debe verificar que el archivo existe',function(){
      expect(tf.fileExists(pathTestFile)).to.be.true;
    });
    //TODO: Develop this test.
     it('Debe verificar que el archivo contenga solo numeros',function(){
      expect(tf.isNumber(pathTestFile)).to.be.true;
    });
    
    //TODO: Develop this test.
    it('Debe leer los datos del archivo por columna',function(){
      expect(tf.readFileForColumn(pathTestFile)).to.be.true;
    });
    
    //TODO: Develop this test.
    it('Debe escribir los datos del archivo en un arreglo',function(){
      expect(tf.writeArray(pathTestFile)).to.be.true;
    });
    
    //TODO: Develop this test.
    it('Debe contar el numero de datos del arreglo',function(){
      expect(tf.countNumbers(pathTestFile)).to.be.true;
    });
    
    it('Debe leer el archivo y retornar una lista ligada', function() {
        expect(myLl).to.be.an('object');
        expect(myLl).to.have.ownProperty('_length');
        expect(myLl).to.have.ownProperty('head');

    });

    it('La lista ligada debe tener la misma logintud de numeros que el total ingresado en el archivo', function() {
        expect(myLl._length).to.equal(6);
    });
    
    it('Deberia calcular la media de la lista ligada', function() {
        expect(mf.averageLl(myLl)).to.equal(20);
    });
    //TODO: Develop this test.
     it('Deberia calcular la media de los datos por columna en la lista ligada', function() {
        expect(mf.averageLlForColumn(myLl)).to.equal(20);
    });
    //TODO: Develop this test.
     it('Deberia calcular la desviacion estandar de la lista ligada', function() {
        expect(mf.standardDeviationLl(myLl)).to.equal(13.03);
    });
    
    //TODO: Develop this test.
     it('Deberia calcular la desviacion estandar de los datos por columna en la lista ligada', function() {
        expect(mf.standardDeviationLlForColumn(myLl)).to.equal(13.03);
    });

});

//TODO: Develop this test.
describe('Pruebas mostrar informacion al usuario', function() {
    //Carga los metodos del objeto antes de cada 'it'
    beforeEach(function() {
        mf = new MathFunctions();
        ll = new linkedList();
        var fileTest = '10;15;30;40;5;20';
        var pathTestFile = 'test/Archivo.txt';
        numberArray = [10, 15, 30, 40, 5];
    });

    it('Deberia mostrar los datos del archivo', function() {
        expect(mf.showFile(pathTestFile)).to.be.true;
    });
    
    it('Deberia mostrar los datos del arreglo', function() {
        expect(mf.showArray(ArrayColumn)).to.be.true;
    });
    
    it('Deberia mostrar la lista Ligada completa', function() {
        expect(mf.showLl(myLl)).to.be.true;
    });
    it('Deberia mostrar la desviacion estandar por columna', function() {
        expect(mf.showStandardDesviation(myLl)).to.be.true;
    });
    it('Deberia mostrar la media por columna', function() {
        expect(mf.showaverage(myLl)).to.be.true;
    });
});
