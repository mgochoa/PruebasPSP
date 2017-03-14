var fs = require('fs');
var path = require('path');
var appRoot = path.resolve(__dirname + '/../');
var linkedList = require('./linkedList');

function files() {
    this.data = null;
}

files.prototype.isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};
files.prototype.openFile = function(filePath, callback) {

    var fp = path.join(appRoot, filePath);
    fs.readFile(fp, {
        encoding: 'utf-8'
    }, function(err, content) {
        if (err)
            return callback(err);
        callback(null, content);
    });

};
//TODO:No se maneja el callback correctamente
files.prototype.readCsvFile = function(filePath, callback) {
  var _this = this;

    var fp = path.join(appRoot, filePath);
    var response = new linkedList();
    fs.readFile(fp, {
        encoding: 'utf-8'
    }, function(err, content) {
        if (err)
            return callback(err);

        var parts = content.split(';');
        parts.forEach(function(a) {
            if (_this.isNumeric(a))
                response.add(Number(a));
            else {
                return callback(err);
            }
        });
        callback(null, response);
    });

};

module.exports = files;
