module.exports = function(db, date, callback){
	var tweets = [];
	var inputDate = new Date(date);
	var endDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), 23, 59  - inputDate.getTimezoneOffset());
	
	db.createReadStream({
		start: date,
		end: endDate.toISOString()
	}).on('data', function(data){
		tweets.push(data.value);
	}).on('end', function(){
		if (callback){
			callback(null, tweets);
		}		
	}).on('error', function(error){
		if (callback){
			callback(error);
		}
	})
}