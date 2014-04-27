function repeat(func, num){
	if num > 0 {
		func();
		repeat(func, num - 1);
	}
}

module.exports = repeat;