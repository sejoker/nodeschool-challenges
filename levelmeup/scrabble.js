module.exports.init = function(db, words, callback){
	db.batch(words.map(function(word){
		return {
			type: 'put',
			key: word.length + word,
			value: word
		}
	}))

	callback();
}

module.exports.query = function(db, query, callback){
	var result = [];
	db.createReadStream({
		start: query.length + query.replace('*', '!'),
		end: query.length + query.replace('*', '~') + '!'
	}).on('data', function(data){
			result.push(data.value);
	}).on('end', function(){
		callback(null, result);
	}).on('error', function(error){
		callback(error);
	})
}