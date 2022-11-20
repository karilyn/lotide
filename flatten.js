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
// Create a function flatten which will take in
// an array containing elements including nested arrays
// of elements, and return a "flattened" version of the array.
// [1, 2, [3, 4], 5, [6]]
// [1, 2, 3, 4, 5, 6]


const flatten = function(array){
  let flattened = [];
  // loop through the outer array to check whether each element is an array or not.
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(e) {
        flattened.push(e);
      });

    }
    else {
      flattened.push(element);

    }
  });

  return flattened;
}
// use Array.isArray to check if something is an array
// write a for each loop to use Array.isArray
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([[1, 2], 3, [4, 5, 6], 7, [8]]));