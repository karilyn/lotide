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

module.exports = findKey
