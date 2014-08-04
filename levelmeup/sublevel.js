var level = require('level');
var subl = require('level-sublevel');
var db = subl(level(process.argv[2]));

 robots = db.sublevel('robots');
// robots.put('slogan','beep boop');

 dino = db.sublevel('dinosaurs');
// dino.put('slogan', 'rawr');

db.batch([
	{ key: 'slogan', value: 'beep boop', type: 'put', prefix: robots },
	{ key: 'slogan', value: 'rawr', type: 'put', prefix: dino },
	]);
