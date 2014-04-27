/* globals module */

'use strict';

module.exports = function(validUsers){
	return function(users){
		return users.every(function(user){
			return validUsers.some(function(validUser){
				return validUser.id === user.id;
			});
		});
	};
};