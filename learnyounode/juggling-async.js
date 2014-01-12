var http = require('http');

var getContent = function(path, callback){
	var content = '';
	http.get(path, function(response){
		response.setEncoding('utf8');
		response.on('data', function(data){
			content += data;
		});
		response.on('error', function(err){
			callback(err);
		});
		response.on('end', function(){			
			callback(null, content);
		});
	});	
}

var paths = process.argv.slice(2, 5),
	results = [],
	count = 0;
//console.log(paths);

paths.forEach(function(value, index){
	getContent(value, function(err, content){
		if (err) {
			console.error(err);
		}

		results[index] = content;
		count++;
		if (count === 3){
			results.forEach(function(value){
				console.log(value);
			});
		}
	});
});