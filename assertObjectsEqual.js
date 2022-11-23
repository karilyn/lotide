const assertObjectsEqual = function(actual, expected) {
  // use the util library's inspect function so that assertion messages don't pring out [object Object]
  const inspect = require('util').inspect;
  //
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const array1 = Object.keys(object1);
  const array2 = Object.keys(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let key of array1) {
    // use eqArrays function if values are arrays
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else
      // if values are not arrays, compare as primitives
      if (object1[key] !== object2[key]) {
        return false
    }
  }
  return true;
 }
