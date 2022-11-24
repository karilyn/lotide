// map function will take in an aray to map and a callback function

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

const assertArraysNotEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(`✅Assertion Passed: ${actual} !== ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} === ${expected}`);
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



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
   results.push(callback(item));
  }
  return results;
}

let words = ["ground", "control", "to", "major", "tom"];
let expectedResult = ['g', 'c', 't', 'm', 't'];
let result = map(words, word => word[0]);

assertArraysEqual(result, expectedResult);


words = ["", "", "", "", ""];
expectedResult = ["", "", "", "", ""];
result = map(words, word => word[0] || "");
assertArraysEqual(result, expectedResult);


words = [1, 2, 3, 4, 5];
expectedResult = [2, 4, 6, 8, 10];
result = map(words, number => number * 2);
assertArraysEqual(result, expectedResult);
