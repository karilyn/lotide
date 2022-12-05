const assertEqual = require('./assertEqual');



const tail = function(array) {
  if (array.length === 0 || array.length === 1) {
    return null; // if there are one or fewer in the array, there can be no tail
  }
  let tail = new Array();
  const length = array.length;
  for (let i = 1; i < length; i++) {
    tail.push(array[i]);
  }
  return tail;
};


module.exports = tail;

