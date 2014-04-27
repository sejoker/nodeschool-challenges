/* globals module */

'use strict';

module.exports = function duckCount(){
	var args = [].slice.call(arguments);

	return args.filter(function(current){
		return {}.hasOwnProperty.call(current, 'quack');
	}).length;
};