var level = require('level');
var fs = require('fs');
var db = level(process.argv[2]);
var batchArr = [];
var file = fs.readFile(process.argv[3], null, function(err, data){
	if (err){
		return;
	}
	
	data.toString().split('\n').forEach(function(line){
		var cmd = line.split(',');
		var operation = {
				type: cmd[0],
				key: cmd[1]
			};

		if (cmd[0] === 'put'){
			operation.value = cmd[2];
		}

		//console.error(operation);

		batchArr.push(operation);
	})	
	db.batch(batchArr);
});