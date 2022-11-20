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

const assertArraysEqual = function(array1, array2) {
  // arrays are not equal length
  if (array1.length !== array2.length) {
    console.log(`❌Assertion Failed ${array1} !== ${array2}`);
    return;
  }

  //if one of the arrays has no value
  if (array1 === null || array2 === null) {
    console.log(`❌Assertion Failed ${array1} !== ${array2}`);
    return;
  }

  for (let i = 0; i < array1.length; i++) {
    // if the items are not equal
    if (array1[i] !== array2[i]) {
      console.log(`❌Assertion Failed ${array1} !== ${array2}`);
      return;
    }
  }
  console.log(`✅Assertion Passed: ${array1} === ${array2}`);
}
// The middle function should return an array with only the middle element(s) of the provided array.
const middle = function(array) {
  let a = [];
  let startIndex;
  // For arrays with one or two elements, return an empty array.
  if (array.length <= 2) {
    return [];
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  startIndex = Math.floor((array.length - 1) / 2);
  a.push(array[startIndex]);

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    a.push(array[startIndex + 1]);
  }
  return a;
}

assertArraysEqual(middle([1]), ([]))
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), ([4, 5]));
assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]));

