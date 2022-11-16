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

const result = tail(["Hello"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!