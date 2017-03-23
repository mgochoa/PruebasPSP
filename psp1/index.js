'use strict';
(function() {
    var chalk = require('chalk');
    var clear = require('clear');
    var figlet = require('figlet');
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
    console.log(chalk.red(figlet.textSync('PSP1', {horizontalLayout: 'full'})));
    //var array=[[130,186],[650,699],[99,132],[150,272],[128,291],[302,331],[95,199],[945,1890],[368,788],[961,1601]];

    //console.log(results);
    //console.log('yk for 386 ', mf.yK(results.equation[0],results.equation[1],386));

    if (process.argv.length == 2) {
        console.log(chalk.red('No selecciono ningun archivo lul'));
    }
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
        var hasError = false;
        tf.readCsvFile(val, function(err, content) {
            if (err) {
                if (!hasError) {
                    console.log(chalk.red('Archivo: ', val));
                    console.log(chalk.red(err));
                    hasError = true;
                };

            }
            if (!hasError) {
                var results = mf.linearRegression(content);

                console.log(chalk.magenta('Archivo: '), val);
                console.log(chalk.magenta('r2: '), results.r2);
                console.log(chalk.magenta('r:'), results.r);
                console.log(chalk.magenta('b0: '), results.equation[0]);
                console.log(chalk.magenta('b1: '), results.equation[1]);
                console.log(chalk.magenta('equation: '), results.string);

            }

        });
    };

})();
