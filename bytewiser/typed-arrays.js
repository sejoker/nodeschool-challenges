process.stdin.on('data', function(data){
	console.log(JSON.stringify(new Uint8Array(data)))
})