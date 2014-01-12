var port = process.argv[2],
	http = require('http'),
	map = require('through2-map');

var server = http.createServer(function(req, res){
	if (req.method != 'POST'){
		return res.end('only post requests are valid\n');
	}
	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
});
server.listen(Number(port));