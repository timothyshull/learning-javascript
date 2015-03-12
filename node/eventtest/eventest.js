var http = require('http')

http.createServer(function(request, response){
	response.writeHead(200);
	response.write("Hello dawgs");
	console.log(request.url);
	response.end();
}).listen(8080, function(){
	console.log('connection');
});