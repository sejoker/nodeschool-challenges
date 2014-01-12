var path = process.argv[2],
	fs = require('fs'),
	lines;

fs.readFile(path, function(err, data){
	if (!err){
		lines = data.toString().split('\n').length - 1
		console.log(lines);
	} else {
		console.log('error occured');
	}
});