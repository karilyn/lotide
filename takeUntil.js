// The function will return a "slice of the array with elements taken from the beginning."

const takeUntil = function(array, callback) {
// the callback is its own function with one value: the item in the array
// the result will be an array
  return array
}

callback function(x) {
  for (let i = 0; i < array.length; i++) {
    if (i === x) {
      return true
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
