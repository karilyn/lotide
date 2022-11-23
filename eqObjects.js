const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keyResult1 = Object.keys(object1);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of keyResult1) {
    if (object1[key] !== object2[key]); {
      return false
    }
  } return true
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
// assertEqual(eqObjects(ab, ba), true)
eqObjects(ab, ba); // true because order isn't important

const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
eqObjects(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
