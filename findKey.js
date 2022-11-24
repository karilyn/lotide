const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

function findKey(object, callback) {
  // scan the object and return the first key for which the callback returns truthy
  // return undefined if no key found
  // it will return a the key which is often a string

  // for each object property
  for (let key in object) {
    // return the first key for which the callback function returns true.
    // pass each value to the callback function
    //   return the first key for which the callback function returns true
    if (callback(object[key])) {
      return key;
    }
  }
  return null;
};




let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result);

assertEqual(result, "noma");