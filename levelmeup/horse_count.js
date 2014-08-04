module.exports = function(db, date, callback){
	var counter = 0;
	var stream = db.createReadStream({start: date});
		stream.on('data', function(data){
			counter++;
		});

		stream.on('end', function(){
			if (callback){
				callback(null, counter);	
			}
			
		});

		stream.on('error', function(error){
			if (callback){
				callback(error);
			}
		});
}