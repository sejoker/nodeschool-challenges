
var crypto = require('crypto');
var through = require('through');
var zlib = require('zlib');
var stream = crypto.createDecipher(process.argv[2], process.argv[3]);

var tar = require('tar');
var parser = tar.Parse();

parser.on('entry', function(e){
	if (e.type !== 'File'){
		return;
	}
	
	var outStream = crypto.createHash('md5', { encoding: 'hex' });
	
		e.pipe(outStream)
		 .pipe(through(null, end))
		 .pipe(process.stdout);
	

	function end(){
		this.queue(' ' + e.path + '\n')
	}
});

process.stdin.pipe(stream)
	.pipe(zlib.createGunzip())
	.pipe(parser);