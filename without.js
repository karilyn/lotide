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

let without = function(source, itemsToRemove) {
  let newArray = source.filter(function(value){
    // return false if it is in itemsToRemove

    return !itemsToRemove.includes(value);
  });

  return newArray;
}


console.log(without([1, 2, 3], [1])); // => [2, 3]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
