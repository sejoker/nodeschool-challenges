var transform = require('through'),
	write = function(buf){
		this.queue(buf.toString().toUpperCase())
	},
	end = function(){
		this.queue(null)
	};

var tr = transform.through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);