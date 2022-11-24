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
  // it will return a string
  const keyResult = Object.keys(object);
  // look through every object key
  for (let key of keyResult) {
      if (callback(object[key])) {
      return key;
    }
  }
  return key;
};




findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
