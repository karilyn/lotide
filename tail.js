const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length === 0 || array.length === 1) {
    return null; // if there are one or fewer in the array, there can be no tail
  }
  let tail = new Array();
  const length = array.length;
  for (let i = 1; i < length; i++) {
    tail.push(array[i]);
  }
  return tail;
};



const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"