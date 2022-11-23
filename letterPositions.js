
const letterPositions = function(sentence) {
  // return an object
  const results = {};
  // remove all spaces
  sentence = sentence.replace(/\s+/g, '');

  for (let i = 0; i < sentence.length; i++) {
    // key is the character at that index in the string
    let key = sentence[i];
    // check to see if the key character is an array or not
    if (!Array.isArray(results[key])){
      // if it's not already an array, initialize a new empty array
      results[key] = [];
    }
    //push the index number as a value into the key
    results[key].push(i);
  }

  return results;
}
console.log(letterPositions("hello"));



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

// test code
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
