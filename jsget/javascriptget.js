var http = require('http');
var fs = require('fs');

// var options = {
//   host: 'http://www.w3.org',
//   port: 8080,
//   path: '/TR/html5/text-level-semantics.html#the-s-element'
// };

var file = fs.createWriteStream("file.html");
var request = http.get("http://www.w3.org/TR/dom/", function(response) {
  response.pipe(file);
});

// var oRequest = new XMLHttpRequest();
// var sURL = "http://http://www.w3.org/TR/html5/text-level-semantics.html#the-s-element";
//
// oRequest.open("GET", sURL, false);
// oRequest.setRequestHeader("User-Agent", navigator.userAgent);
// oRequest.send(null);
//
// if (oRequest.status === 200) {alert(oRequest.responseText);}
// else {alert("Error executing XMLHttpRequest call!");}
//

// document = file;
//
// var fs1 = require('fs');
// fs.writeFile("/tmp/test1.txt", document, function(err) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("The file was saved!");
//     }
// });
//

var jsdom = require('jsdom');

jsdom.env(
	document = new Document();
var document = fs.readFile('file.html', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

var coll = document.getElementsByClassName('note');
var str1 = new String();

for (var i = 0; i < coll.length; i++){
var elem = coll[i];
var text = elem.innerText;
str1 = str1.concat(text + "\n");
}

var fs = require('fs');
fs.writeFile("/tmp/test.txt", str1, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
});
);
