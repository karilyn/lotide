// adding in assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};
// adding in assertArraysEqual function for testing
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

// adding eqArrays function so that assertArraysEqual will work
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // arrays are not equal length
    return false;
  }
  //if one of the arrays has no value
  if (array1 === null || array2 === null) {

    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // if the items are not equal
    if (array1[i] !== array2[i]) {
     return false;
    }
  }
  return true;
}



// The function will return a "slice of the array with elements taken from the beginning."
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



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(["1", "2", "5", "7", "2"], ["1", "2", "5", "7", "2"]);
assertArraysEqual(["I've", "been", "to", "Hollywood",], ["I've", "been", "to", "Hollywood"]);