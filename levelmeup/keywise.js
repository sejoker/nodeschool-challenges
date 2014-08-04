var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json'});
var data = require(process.argv[3]);
var batchArray = data.map(function(entry){
	var key = (entry.type === 'user') ? entry.name
									  : entry.user + '!' + entry.name;
	return {
			type: 'put',
			key: key,
			value: entry
			};
})

db.batch(batchArray);
