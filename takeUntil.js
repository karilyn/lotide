// return a slice of the array with elements taken from the beginning.
const takeUntil = function(array, callback) {
// the callback is its own function with one value: the item in the array
// the result will be a new array
  let newArray = [];
  // iterate though each index in the array
  for (let i = 0; i < array.length; i++) {
    // call callback for each item in the array, if it returns true, stop.
    if (callback(array[i])) {
      // if this condition is met, the return stops the function
      break;
    }
    // add the array items to the new array until the condition is met
    newArray.push(array[i]);
  }
  return newArray;
}


module.exports = takeUntil;