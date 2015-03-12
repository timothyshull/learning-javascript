var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var splitArray = str.split('\n');

var numNewLines = splitArray.length - 1;

console.log(numNewLines);

