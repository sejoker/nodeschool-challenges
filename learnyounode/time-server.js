var port = process.argv[2];
var net = require('net');
var currentDate = new Date();
var zeroFill = function(value){
	return (value < 10) ? '0' + value: value;
}
var dateTime = currentDate.getFullYear() + '-' 
	+ new Number(currentDate.getMonth() + 1) + '-' 
	+ currentDate.getDate() + ' ' 
	+ zeroFill(currentDate.getHours()) + ':' 
	+ zeroFill(currentDate.getMinutes()) + '\n';
var server = net.createServer(function(socket){
	if (socket){
		socket.end(dateTime);
	}	
});

server.listen(port);