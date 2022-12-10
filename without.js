// return a subset of a given array, removing unwanted elements
let without = function(source, itemsToRemove) {
  let newArray = source.filter(function(value) {
    // return false if it is in itemsToRemove
    return !itemsToRemove.includes(value);
  });

  return newArray;
};

module.exports = without;