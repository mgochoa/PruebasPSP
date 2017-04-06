'use strict';
var Chalk = require('chalk');

var MathFunctions = require('../lib/MathFunctions');
var Files = require('../lib/files');
var LinkedList = require('../lib/linkedList');
var expect = require('chai').expect;
var mf = new MathFunctions();
var tf = new Files();
var arrayTest = [
    6,
    6,
    8.333333333333334,
    10.333333333333334,
    12.333333333333334,
    16.4,
    20.5,
    21.75,
    22.25,
    23,
    28.333333333333332,
    29,
    55.8
];
var logarithmicRangesTest = {
    vs: 1.4805287635010096,
    s: 2.1410231465465013,
    m: 2.801517529591993,
    l: 3.4620119126374846,
    vl: 4.122506295682976
};
var normalizedRangesTest = {
    vs: 4.395269124478685,
    s: 8.508138249389225,
    m: 16.469620953940062,
    l: 31.881053929269868,
    vl: 61.713721431934815
};

describe('Tests ', function() {

    var arrayReponse = [];
    var average = null;
    var variance = null;
    var standarDeviation = null;
    var logarithmicRanges = null;
    var normalizedRanges = null;

    before(function(done) {
        tf.readCsvFile('test/dataset.csv', function(err, response) {
            if (!err) {
                //console.log(response);
                arrayReponse = response;
                average = mf.arrayAverage(arrayReponse);
                variance = mf.getVariance(arrayReponse, average);
                standarDeviation = Math.sqrt(variance);
                logarithmicRanges = mf.logarithmicRanges(average, standarDeviation);
                normalizedRanges = mf.normalizeRanges(logarithmicRanges);

                done();
            }
        });
    })
    it('Recibe el archivo y los valores resultantes por la division son iguales a los del ejemplo', function() {
        expect(arrayReponse).to.deep.equal(arrayTest);
    })
    it('Obtiene el average', function() {
        expect(average).to.be.equal(2.801517529591993);

    })
    it('Obtiene la varianza', function() {
        expect(variance).to.be.equal(0.43625283003464466);

    })
    it('Obtiene la desviacion estandar', function() {
        expect(standarDeviation).to.be.equal(0.6604943830454917);

    })
    it('Obtiene los rangos logaritmicos', function() {
        expect(logarithmicRanges).to.deep.equal(logarithmicRangesTest);

    })
    it('Obtiene los rangos normalizados', function() {
        expect(normalizedRanges).to.deep.equal(normalizedRangesTest);

    })

});
