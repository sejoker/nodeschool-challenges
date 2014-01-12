var fs = require('fs');
var path = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(path, function(err, data){
	if (err) {
		throw err;
	}
	var filterRegExp = new RegExp('.*\\.' + fileExt + '$', 'i');
	for(var i = 0; i < data.length; i++){
		if (filterRegExp.test(data[i])){
			console.log(data[i]);		
		}	
	}
});