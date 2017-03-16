var http, server;

http = require('http');
server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.end('Hello Node App!');
}).listen(3000);

console.log('Listening on port %d', server.address().port);
