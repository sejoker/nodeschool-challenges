var concat = require('concat-stream');



process.stdin.pipe(concat(function(body){
	var reverse = '';
	if (body){
		reverse = body.toString().split('').reverse().join('');
	}
	
	process.stdout.write(reverse)	
}));