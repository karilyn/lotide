const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
};



//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);

module.exports = assertEqual;
module.exports = head;