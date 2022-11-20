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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

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


assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);