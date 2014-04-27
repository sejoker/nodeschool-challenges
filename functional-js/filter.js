/* globals module */

'use strict';

module.exports = function(messages){
	return messages.map(function(x) { return x.message; })
				   .filter(function(x) { return x.length < 50; });
};