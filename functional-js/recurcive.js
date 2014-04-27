/* globals module */

'use strict';

module.exports = function reduce(arr, fn, initial){
	var recurcive = function(value, index){
		if (index === arr.length) {
			return value;
		}

		value = fn(initial, arr[index], index, arr);

		return recurcive(value, ++index);
	};

	return recurcive(initial, 0);
};