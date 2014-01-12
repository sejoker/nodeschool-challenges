module.exports = function(path, fileExt, callback){
	var fs = require('fs');
	fs.readdir(path, function(err, data){
		if (err){
			return callback(err);
		}

		var regExp = new RegExp('\\.' + fileExt + '$', 'i');
		var files = data.filter(function(fileName){
			return regExp.test(fileName);
		});
		
		callback(null, files);
	})
}