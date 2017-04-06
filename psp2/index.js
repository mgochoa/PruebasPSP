'use strict';
(function() {
    var chalk = require('chalk');
    var clear = require('clear');
    var figlet = require('figlet');
    var fs = require('fs');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');
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
    console.log(chalk.yellow(figlet.textSync('PSP2', {horizontalLayout: 'full'})));

    if (process.argv.length == 2) {
        console.log(chalk.red('No selecciono ningun archivo lul'));
    }
    process.argv.forEach(function(val, index, array) {

        if (index == 2) {
            console.log(chalk.green('Archivo a procesar: ' + val));
            console.log(chalk.green('Procesando...'));
            setTimeout(function() {
                processFile(val);
            }, 2000);

        } else if(index>=2){
            console.log(chalk.red('No se reciben más parametros'));
        }
    });

    function processFile(val) {
        tf.readCsvFile(val, function(err, content) {
            if (!err) {
                var reponse = mf.RST(content);
                console.log(chalk.magenta('Average:'), reponse.average);
                console.log(chalk.magenta('Variance: '), reponse.variance);
                console.log(chalk.magenta('standarDeviation: '), reponse.standarDeviation);
                console.log(chalk.magenta('logarithmicRanges: '), reponse.lr);
                console.log(chalk.magenta('normalizedRanges: '), reponse.nr);
                reponse.fileName=val;
                tf.toJSON(reponse);
                connect().use(serveStatic(__dirname+'/www/')).listen(process.env.PORT || 8080, function(){
                    console.log('Server running on 8080...');
                    console.log(chalk.white('>> ctrl + c  to stop the server'));
                    open('http://localhost:8080');
                });
            }

        });
    };

})();
