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
        expect(mf.standardDeviation(numberArray)).to.equal(14.58);
    });
    it('Debería calcular la media de un grupo de numeros en una lista ligada', function() {
        numberArray.forEach(function(a) {
            ll.add(a);
        });
        expect(mf.averageLl(ll)).to.equal(20);
    });
    it('Debería calcular la desviacion estandar de un grupo de numeros en una lista ligada', function() {
        numberArray.forEach(function(a) {
            ll.add(a);
        });
        expect(mf.standardDeviationLl(ll)).to.equal(14.58);
    });

});

describe('Pruebas de lectura de archivos', function() {
    var fileTest = '10;15;30;40;5;20';
    var pathTestFile = 'test/dataset_1.txt';
    //var pathTestFile = 'test/badFile.txt';
    var firstFileTest = null;
    var myLl;
    var myArray;
    beforeEach(function(done) {
        tf = new files();
        mf = new MathFunctions();
        tf.readCsvFile(pathTestFile, function(err, content) {
            if (err) {
                if (err.code == 'ENOENT') {
                    console.warn("El archivo no existe");
                } else {
                    throw err;
                }

            };
            myLl = content;
            done();
        });
    });
    it('Debe verificar que el archivo existe', function(done) {
        tf.fileExists(pathTestFile, function(err, content) {
            if (err)
                throw err;
            expect(content).to.be.true;
            done();

        });
    });

    it('Debe escribir los datos del archivo en un arreglo', function(done) {
        tf.writeArray(pathTestFile, function(err, content) {
            if (err)
                throw err;
            expect(content).to.be.instanceof(Array);
            done();

        });

    });

    it('Debe leer el archivo y retornar una lista ligada', function() {
        expect(myLl).to.be.an('object');
        expect(myLl).to.have.ownProperty('_length');
        expect(myLl).to.have.ownProperty('head');

    });

    it('La lista ligada debe tener la misma logintud de numeros que el total ingresado en el archivo', function() {
        expect(myLl._length).to.equal(10);
    });

    it('Deberia calcular la media de la lista ligada del dataset_1', function() {
        expect(mf.averageLl(myLl)).to.equal(550.6);
    });

    it('Deberia calcular la desviacion estandar de la lista ligada del dataset_1', function() {
        expect(mf.standardDeviationLl(myLl)).to.equal(572.03);
    });
});

describe('Pruebas para dataset_2', function() {
    var pathTestFile = 'test/dataset_2.txt';
    var myLl;
    beforeEach(function(done) {
        tf = new files();
        mf = new MathFunctions();
        tf.readCsvFile(pathTestFile, function(err, content) {
            if (err) {
                if (err.code == 'ENOENT') {
                    console.warn("El archivo no existe");
                } else {
                    throw err;
                }

            };
            myLl = content;
            done();
        });
    });
    it('Deberia calcular la media de la lista ligada', function() {
        expect(mf.averageLl(myLl)).to.equal(60.32);
    });

    it('Deberia calcular la desviacion estandar de la lista ligada', function() {
        expect(mf.standardDeviationLl(myLl)).to.equal(62.26);
    });
});

describe('Pruebas para archivo incorrecto', function() {
    var noExistentFile = 'test/noExistent.txt';
    var badFile='test/badFile.txt';
    it('Deberia lanzar error porque no existe el archivo', function(done) {
        tf.readCsvFile(noExistentFile, function(err, content) {
            if (err) {
                expect(err.code).to.equal('ENOENT');
                done();
            };

        });
    });
    it('Deberia lanzar error porque no el archivo esta incorrecto', function() {
        tf.readCsvFile(badFile, function(err, content) {
            if (err) {
                expect(err).to.be.true;
            };


        });

    });
})
