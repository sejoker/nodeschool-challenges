/* globals module */

'use strict';

module.exports = function(arr, cb){
	return arr.reduce(function(acc, value) {
		acc.push(cb(value));
		return acc;
	}, []);
};
