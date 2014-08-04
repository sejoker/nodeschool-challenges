'use strict';
var level = require('level');
var db = level(process.argv[2]);

var callDb = function(key){
	db.get('key' + key, function(err, value){
		if (!err) {
			console.log('key' + key + '=' + value);
		}
		if (key < 100){
			callDb(key + 1);
		}
	})
}

callDb(0);

