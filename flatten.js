// function will take in array containing elements including nested arrays
// and return a "flattened" version of the array.
const flatten = function(array) {
  let flattened = [];
  // loop through the outer array to check whether each element is an array or not.
  array.forEach(function(element) {
    // use Array.isArray to check if something is an array
    // use a forEach loop to check
    if (Array.isArray(element)) {
      element.forEach(function(e) {
        flattened.push(e);
      });
    } else {
      flattened.push(element);
    }
  });

  return flattened;
};

module.exports = flatten;

