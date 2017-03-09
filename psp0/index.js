'use strict';

(function() {
    var chalk = require('chalk');
    var clear = require('clear');
    var CLI = require('clui');
    var figlet = require('figlet');
    var inquirer = require('inquirer');
    /*var Preferences = require('preferences');
    var Spinner = CLI.Spinner;
    var GitHubApi = require('github');
    var _ = require('lodash');
    var git = require('simple-git')();
    var touch = require('touch');*/
    var fs = require('fs');
    //Librerias locales
    var files = require('./lib/files');
    var linkedList = require('./lib/linkedList');
    var MathFunctions = require('./lib/MathFunctions');
    var myNumberArray = [];

    //Limpia la consola
    clear();
    //Pinta titulos
    console.log(chalk.yellow(figlet.textSync('PSP0', {horizontalLayout: 'full'})));

    var mf= new MathFunctions();
    console.log(mf.suma(10,12));
    //Crea nueva listaLigada
    var ll = new linkedList();
    //Probando listaLigada
    ll.add("Hola");
    ll.add("Mundo");
    //Muestra lista ligada
    console.log(ll);

    
    /*getInformation(function() {
        console.log(arguments['0']);
        var array = arguments['0'].numberFile.split(';');
        console.log('Number array: ' + array.join('/'));
    });*/


/**
Funciones para probar
**/
    function getInformation(callback) {
        var questions = [
            {
                name: 'username',
                type: 'input',
                message: 'Enter your Github username or e-mail address:',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your username or e-mail address';
                    }
                }
            }, {
                name: 'password',
                type: 'password',
                message: 'Enter your password:',
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your password';
                    }
                }
            }, {
                name: 'listard',
                type: 'list',
                message: 'Elige uno',
                choices: [
                    "Opcion A", "Opcion B", "Opcion C"
                ],
                default: "Opcion A",
                validate: function(value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Escoje una opcion';
                    }
                }
            }, {
                name: 'numberFile',
                type: 'editor',
                message: "Ingrese los numeros separados por punto y coma"
            }
        ];

        inquirer.prompt(questions).then(callback);
    }


    function getNumbers(callback) {
        var questions = {
            name: 'number',
            type: 'input',
            message: 'Enter a number',
            validate: function(value) {
                if (typeof value == 'number') {
                    myNumberArray.push(value);
                    return true;
                } else if (value == '') {
                } else {
                    return 'Please enter a valid number';
                }
            }
        };
        inquirer.prompt(questions).then(callback);

    };

})();
