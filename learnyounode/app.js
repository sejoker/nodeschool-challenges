var fs = require('fs'),
	buffer,
	path = process.argv[2];

buffer = fs.readFileSync(path);
console.log(buffer.toString().split('\n').length - 1);
