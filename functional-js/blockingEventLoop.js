/* globals module */
'use strict';

module.exports = function repeat(operation, num) {
	if (num <= 0) return;

	operation();
	
  	return setTimeout(function() { repeat(operation, --num) }, 10);
};
