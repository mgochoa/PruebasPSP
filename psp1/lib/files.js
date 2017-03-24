var fs = require('fs');
var path = require('path');
var readline = require('readline');
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
        var response = [];
        fs.readFile(fp, {
            encoding: 'utf-8'
        }, function(err, content) {
            if (err)
                return callback(err);

            var datasets = content.split('\n');
            var xs = datasets[0].split(';');
            var ys = datasets[1].split(';');
            if (xs.length != ys.length) {
                return callback(new MyError('Columnas con tamaños diferentes'))
            }
            var error = false;
            for (var i = 0; i < xs.length; i++) {
                if (_this.isNumeric(xs[i]) && _this.isNumeric(ys[i])) {
                    var pair = [
                        Number(xs[i]),
                        Number(ys[i])
                    ];
                    response.push(pair);
                } else {
                    error = true;
                }
            }
            if (error) {
                return callback(new MyError('El archivo está mal escrito'));
            }
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
files.prototype.toNumber = function(num) {
    return Number(num);
};
files.prototype.toJSON = function(obj) {
  var newPoints=[];
    obj.points.forEach(function (dupla) {
      newPoints.push({x:dupla[0],y:dupla[1]});
    });
    obj.points =newPoints;
    var json = JSON.stringify(obj);
    fs.writeFile('www/data.json', json, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }

        //console.log("The file was saved!");

    });

};

module.exports = files;
