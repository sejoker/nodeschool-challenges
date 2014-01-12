var filePath = process.argv[2];
var fs = require('fs');
fs.readFile(filePath, function(err, data){
	if (err) throw err;

	var begin = 0;
	var i = 1;	
	while (i < data.length){
		if (data[i] === '\n'.charCodeAt(0)){
			console.log(data.slice(begin, i));
			begin = i + 1;
		}

		i+=1;
	}

	console.log(data.slice(begin, i))
})