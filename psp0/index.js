'use strict';

(function() {
    var chalk = require('chalk');
    var clear = require('clear');
    var CLI = require('clui');
    var figlet = require('figlet');
    var inquirer = require('inquirer');
    var fs = require('fs');
    //Librerias locales
    var files = require('./lib/files');
    var linkedList = require('./lib/linkedList');
    var MathFunctions = require('./lib/MathFunctions');
    var myNumberArray = [];
    var path = require('path');

    //Objetos locales
    //Crea nuevo objeto de funciones matematicas
    var mf = new MathFunctions();
    //Crea nueva listaLigada
    var ll = new linkedList();
    var tf = new files();
    //Limpia la consola
    clear();
    //Pinta titulos
    console.log(chalk.yellow(figlet.textSync('PSP0', {horizontalLayout: 'full'})));




    process.argv.forEach(function(val, index, array) {
        if (index >= 2) {
            console.log(chalk.green('Archivo a procesar: ' + val));
            console.log(chalk.green('Procesando...'));
            setTimeout(function() {
                processFile(val);
            }, 2000);

        }
    });

    function processFile(val) {
      var hasError=false;
      tf.readCsvFile(val, function(err, content) {
          if (err) {
              if(!hasError){
                  console.log(chalk.red('Archivo: ',val));
                  console.log(chalk.red(err));
                    hasError=true;
              };

          }
          if (!hasError) {

              console.log(chalk.magenta('Archivo: '),val);
              console.log(chalk.magenta('Cantidad de números: '),content._length);
              console.log(chalk.magenta('Media:'), mf.averageLl(content));
              console.log(chalk.magenta('Desviacion estandar: '), mf.standardDeviationLl(content));
          }

      });
    };

})();
