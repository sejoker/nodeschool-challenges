/* globals module */

'use strict';

module.exports = function(target, method){
	
	var fn = target[method],
		spy = { count: 0};

	target[method] = function(){
		spy.count++;
		return fn.apply(target, arguments);
	};

	return spy;
};