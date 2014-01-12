var http = require('http')
	fs = require('fs'),
	port = process.argv[2],
	path = process.argv[3];

var stream = fs.createReadStream(path);
var server = http.createServer(function(req, res){
	stream.pipe(res);
});

server.listen(port);
