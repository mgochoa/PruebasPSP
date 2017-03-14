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
    it('Debería calcular la media de un grupo de numeros en una lista ligada', function() {
        numberArray.forEach(function(a) {
            ll.add(a);
        });
        expect(mf.averageLl(ll)).to.equal(20);

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
            myLl = content;
            done();
        });
    });
    //TODO: Develop this test.
    it('Debe verificar que el archivo existe',function(){
      expect(tf.fileExists(pathTestFile)).to.be.true;
    });

    it('Debe leer el archivo y retornar una lista ligada', function() {
        expect(myLl).to.be.an('object');
        expect(myLl).to.have.ownProperty('_length');
        expect(myLl).to.have.ownProperty('head');

    });
    it('Debe tener la misma logintud de numeros que los ingresados en el archivo', function() {
        expect(myLl._length).to.equal(6);
    });
    it('Deberia calcular la media de la lista ligada', function() {
        expect(mf.averageLl(myLl)).to.equal(20);
    });

});
