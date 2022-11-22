
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};
// str is the string we need to look at
const countLetters = function(str) {
  // we want the result to be an object
  const results = {};
  //we want to remove spaces because they don't need to be counted
  str = str.replace(/\s+/g, '');
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
// console.log(countLetters("lighthouse in the house"));
// test code
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
