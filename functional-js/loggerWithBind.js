/* globals module, console */

'use strict';

module.exports = function(namespace){
	return console.log.bind(console, namespace);
};
