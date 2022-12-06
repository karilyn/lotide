const assertArraysEqual = require('./assertArraysEqual');


// return the middle-most element(s) of a given array

const middle = function(array) {
  let a = [];
  let startIndex;
  // For arrays with one or two elements, return an empty array.
  if (array.length <= 2) {
    return [];
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  startIndex = Math.floor((array.length - 1) / 2);
  a.push(array[startIndex]);

  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    a.push(array[startIndex + 1]);
  }
  return a;
};

module.exports = middle;

