//var through = require('through');

var excl_mark_char = '!'.charCodeAt(0);
var dot_char = '.'.charCodeAt(0);
process.stdin.on('data', function(buffer){
for (var i = 0; i < buffer.length; i++){
	if (buffer[i] === dot_char){
		buffer[i] = excl_mark_char;
	}
	
}

console.log(buffer);
})

