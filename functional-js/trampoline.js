/* globals module */
'use strict';

function repeat(operation, num) {
  if (num <= 0) return null;

  operation();

  return repeat.bind(this, operation, --num);
}
    
function trampoline(fn) {
  while (fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  return trampoline(repeat.bind(this, operation, num));
};
