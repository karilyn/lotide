const eqArrays = require('../eqArrays');

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
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

