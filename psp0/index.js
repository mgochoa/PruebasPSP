var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');
//Librerias locales
var files = require('./lib/files');
var service = require('./lib/service');
var linkedList= require('./lib/linkedList');


clear();
console.log(
  chalk.yellow(
    figlet.textSync('PSP0', { horizontalLayout: 'full' })
  )
);
if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}
var ll= new linkedList();
console.log(ll);
ll.add("Hola");
console.log(ll);
ll.add("Holitaaa");
console.log(ll);
//console.log(ll.searchNodeAt(2).value);

/*getGithubCredentials(function(){
  console.log(arguments);
});
function getGithubCredentials(callback) {
  var questions = [
    {
      name: 'username',
      type: 'input',
      message: 'Enter your Github username or e-mail address:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your username or e-mail address';
        }
      }
    },
    {
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
    }
  ];

  inquirer.prompt(questions).then(callback);
}
*/