/* globals module */

'use strict';

module.exports = function(words){
	return words.reduce(function(prev, value){
		prev[value] = ++prev[value] || 1;
		return prev;
	}, {});
};