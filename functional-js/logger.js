/* globals module, console */

'use strict';

module.exports = function logger(namespace){
	return function(){
			var args = [].slice.call(arguments);
			
			args.splice(0, 0, namespace);

			return console.log.apply(this, args);
	};
};
