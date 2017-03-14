var fs = require('fs');
var path = require('path');
global.appRoot = path.resolve(__dirname + '/../');
var linkedList = require('./linkedList');
function MyError(message) {
  this.name = 'Error de archivo';
  this.message = message || 'Default Message';
  this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;
function files() {
    this.data = null;
};

files.prototype.fileExists = function(filePath, callback) {
    var fp = path.join(appRoot, filePath);
    var response = null;
    try {
        return callback(null, fs.existsSync(fp));

    } catch (err) {
        return callback(err);
    }

};

files.prototype.isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

files.prototype.openFile = function(filePath, callback) {

    var fp = path.join(appRoot, filePath);
    var response = null;
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
    try {
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
                     return callback(new MyError('El archivo está mal escrito'));
                }
            });
            callback(null, response);
        });
    } catch (e) {
        return callback(e.message);
    }

};
files.prototype.writeArray = function(filePath, callback) {
    var _this = this;

    var fp = path.join(appRoot, filePath);
    var response = [];
    fs.readFile(fp, {
        encoding: 'utf-8'
    }, function(err, content) {
        if (err)
            return callback(err);

        var parts = content.split(';');
        parts.forEach(function(a) {
            if (_this.isNumeric(a)) {
                response.push(Number(a));
            } else {
                return callback("El archivo esta mal escrito");
            }
        });
        callback(null, response);
    });
};

module.exports = files;
