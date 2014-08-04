var level = require('level');
var db = level(process.argv[2]);
var data = JSON.parse(process.argv[3]);
for(prop in data){
	db.put(prop, data[prop]);
}