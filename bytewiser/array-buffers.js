var array = new Uint32Array(1);
array[0] = process.argv[2];
var copyArray = new Uint16Array(array.buffer);

console.log(JSON.stringify(copyArray));

