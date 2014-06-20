/* globals module */
'use strict';

module.exports = function curryN(fn){
	var n = fn.length,
		curry = function(fn, n){
			if (n > 1) {
				return curry.bind()
			}
		}
}