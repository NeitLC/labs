var static = require('node-static');
var file = new static.Server();
require('http').createServer(function(request, response) {
  request.addListener('end', function() {
    file.serve(request, response);
  }).resume();
}).listen(process.env.PORT || 3000);
console.log("Started server: http://localhost:3000/");