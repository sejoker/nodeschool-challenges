/* globals module */
'use strict';

module.exports = function loadUsers(userIds, load, done){
	var usersLoaded = 0;
	userIds.map(function(id, index){
		load(id, function(user){
			userIds[index] = user;
			usersLoaded++;
			if (usersLoaded == userIds.length){
				done(userIds);
			}
		});
	});
};