/* globals module */
'use strict';

module.exports = function getDependencies(tree){
	var DFS = function(node, depArray){
		if (!node.dependencies) {
			return;
		}

		Object.keys(node.dependencies).forEach(function(depName){
			var dependency = node.dependencies[depName],
				depString = depName + '@' + dependency.version;

			if (depArray.indexOf(depString) === -1){
				depArray.push(depString);
			}

			DFS(dependency, depArray);
		});
	},
	dep = [];

	DFS(tree, dep);

	dep.sort();

	return dep;
};