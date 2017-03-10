var fs = require('fs');
var path = require('path');
function files(){
}

/*module.exports = {
  getCurrentDirectoryBase : function() {
    return path.basename(process.cwd());
  },

  directoryExists : function(filePath) {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};*/

files.prototype.existeArchivo=function(filePath){

  try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      //console.log(err);
      return false;
    }

};
module.exports = files;
