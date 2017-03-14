var fs = require('fs');
var path = require('path');
global.appRoot = path.resolve(__dirname + '/../');
var linkedList = require('./linkedList');

function files() {
    this.data = null;
}
files.prototype.openFile = function(filePath, callback) {

    var filePath = path.join(appRoot, filePath);
    var response = null;
    fs.readFile(filePath, {
        encoding: 'utf-8'
    }, function(err, content) {
        if (err)
            return callback(err);
        callback(null, content)
    });

};

files.prototype.readCsvFile = function(filePath, callback) {

    var filePath = path.join(appRoot, filePath);
    var response = new linkedList();
    fs.readFile(filePath, {
        encoding: 'utf-8'
    }, function(err, content) {
        if (err)
            return callback(err);

        var parts = content.split(';');
        parts.forEach(function(a) {
          if(isNumeric(a)) response.add(Number(a));
          else{
              console.log("No es un numero.");
          }
        });
        callback(null, response)
    });

};
 function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

module.exports = files;
