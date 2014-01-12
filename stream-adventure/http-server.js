var http = require('http'),
	transform = require('through');

var server = http.createServer(function(req, res){
	if (req.method === 'POST'){
		req.pipe(transform(function(data){
			this.queue(data.toString().toUpperCase());
		})).pipe(res);
	}
	else res.end('POST is expected');
});

server.listen(process.argv[2]);