var fs = require('fs');
var path = require('path');

var dir = process.argv[2], filter = '.' + process.argv[3];

fs.readdir(dir, function (err, files) {
  var fileList = files;
  for (var i = 0; i < fileList.length; i++){
    if (path.extname(fileList[i]) === filter) {
      console.log(fileList[i]);
    }
  }
});

// var fs = require('fs')
// var path = require('path')
//
// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
