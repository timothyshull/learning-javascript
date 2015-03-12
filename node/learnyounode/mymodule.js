var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
  
  fs.readdir(dir, function (err, data) {
    var files = [];
    if (err) {
      return callback(err);
    }
    
    for (var i = 0; i < data.length; i++) {
      if (path.extname(data[i]) === '.' + ext) {
        files.push(data[i]);
      }
    }
    callback(null, files);
  })
};


