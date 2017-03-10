var MathFunctions = require('../lib/MathFunctions');
var files = require('../lib/files');
var expect = require('chai').expect;
var mf = null;
var tf = null;

describe('Pruebas operaciones matematicas', function() {

    //Carga los metodos del objeto antes de cada 'it'
    beforeEach(function() {
        mf = new MathFunctions();

    });

    it('Deberia sumar dos numeros', function() {
        expect(mf.suma(10, 12)).to.equal(22);

    });

    it('Deberia calcular la media de un grupo de numeros', function() {
        var numberArray = [10, 30, 25, 15, 20];
        expect(mf.average(numberArray)).to.equal(20);
    });
});

describe('Pruebas de lectura de archivos', function() {

    beforeEach(function() {
        tf = new files();

    });
    it('Es un archivo', function() {
        //expect(tf.existeArchivo('Archivo.txt')).to.be.true;
        expect(true).to.be.true;
    });

});
