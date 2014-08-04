var net = require('net');
var multilevel = require('multilevel');
var db = multilevel.client();
var conn = net.connect(4545);
conn.pipe(db.createRpcStream()).pipe(conn);

db.get('multilevelmeup', function(err, value){
	if (err) {
		throw err;
	}

	console.log(value);

	conn.end();
})