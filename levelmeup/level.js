var level = require('level');
var db = level(process.argv[2]);
db.get('levelmeup', function(err, value){
	if (err){
		console.log('error occured:' + err);
	}

	console.log(value);
});