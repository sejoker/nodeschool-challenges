var port = process.argv[2],
	http = require('http'),
	url = require('url');

var parseIsoTime = function(isotime){
	var date = new Date(isotime);
	return {
		"hour": date.getHours(),
		"minute": date.getMinutes(),
		"second": date.getSeconds()
	}
}

var parseUnixTime = function(isotime){
	return {
		'unixtime': new Date(isotime).getTime()
	}
}

server = http.createServer(function(req, res){

	if (req.method !== 'GET'){
		return res.end('only get requests are served');
	}
	var address = url.parse(req.url, true),
		responseTime;

	switch (address.pathname){
		case '/api/parsetime':
			responseTime = parseIsoTime(address.query.iso);
			break;
		case '/api/unixtime':
			responseTime = parseUnixTime(address.query.iso)
		break;
		default: return res.end('unsupported query!'); 
	}
	if (responseTime){
		res.writeHead(200,  {'Content-Type' : 'application/json'});
		return res.end(JSON.stringify(responseTime));	
	} 

	res.writeHead(404);
	return res.end();
	
});
server.listen(Number(port));