const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  // extract the keys from each object
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // check to see if the key lengths match
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  // iterate over the keys
  for (let key of object1Keys) {
    // use eqArrays function if values are arrays
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else
      // if values are not arrays, compare as primitives
      if (object1[key] !== object2[key]) {
        return false
    }
  }
  return true;
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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true)
// console.log(eqObjects(ab, ba)); // true because order isn't important

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
// console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
// console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
// console.log(eqObjects(cd, cd2));