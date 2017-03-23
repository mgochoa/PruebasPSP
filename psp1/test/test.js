'use strict';
var Chalk= require('chalk');

var MathFunctions = require('../lib/MathFunctions');
var Files = require('../lib/files');
var LinkedList = require('../lib/linkedList');
var expect = require('chai').expect;
var mf= new MathFunctions();
var tf= new Files();
describe('Pruebas principales con arrays', function() {
    describe('Test 1', function() {
      var resultados=null;
      beforeEach(function (done) {
        tf.readCsvFile('test/test1.csv',function(err,response){
          if(err){
            if(err.message)
            console.error(Chalk.red(err.message));
          }
           resultados=mf.linearRegression(response);
           done();
        });
      });
        it('Calculate the regression parameters and correlation coefficients between estimated proxy size and actual added and modified size in Table 1', function() {
          var gradient=parseFloat(resultados.equation[0].toFixed(4));
          var intercept=parseFloat(resultados.equation[1].toFixed(2));
          expect(resultados.r2).to.equal(0.9111);
          expect(gradient).to.equal(1.7279);
          expect(intercept).to.equal(-22.55);
        });
        it('Calculate plan added and modified size given an estimated proxy size of Xk = 386.', function() {
            expect( mf.yK(resultados.equation[0],resultados.equation[1],386)).to.equal(644.429);
        });

    });
    describe('Test 2', function() {
      var resultados=null;
      beforeEach(function (done) {
        tf.readCsvFile('test/test2.csv',function(err,response){
          if(err){
            if(err.message)
            console.error(Chalk.red(err.message));
          }
           resultados=mf.linearRegression(response);
           done();
        });
      });
        it('Calculate the regression parameters and correlation coefficients between estimated proxy size and actual development time in Table 1', function() {
          var gradient=parseFloat(resultados.equation[0].toFixed(4));
          var intercept=parseFloat(resultados.equation[1].toFixed(3));
          expect(resultados.r2).to.equal(0.8711);
          expect(gradient).to.equal(0.1681);
          expect(intercept).to.equal(-4.039);
        });
        it('Calculate time estimate given an estimated proxy size of kx = 386.', function() {
          expect( mf.yK(resultados.equation[0],resultados.equation[1],386)).to.equal(60.858);
        });

    });

    describe('Test 3', function() {
        it('Calculate the regression parameters and correlation coefficients between plan added and modified size and actual added and modified size in Table 1.', function() {});
        it('Calculate time estimate given an estimated proxy size of kx = 386.', function() {});

    });
    describe('Test 4', function() {
        it('Calculate the regression parameters and correlation coefficients between plan added and modified size and actual development time in Table 1', function() {});
        it('Calculate time estimate given an estimated proxy size of kx = 386.', function() {});

    });

});
