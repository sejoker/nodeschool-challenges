var duplexer = require('duplexer');
var through = require('through');
var countries = {};

module.exports = function(counter){
	var write = function(data){
		countries[data.country] = (countries[data.country] || 0) + 1;
	}
	var end = function(){
		counter.setCounts(countries);
	}
	var tr = through(write, end);
	return duplexer(tr, counter)
}