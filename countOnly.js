
// When given an array and an object, countOnly will return an object containing number of instances of everything that the input object listed.
// only keys with a truthy value will be counted in the resulting object
const countOnly = function(allItems, itemsToCount) {
  // results will be an object
  const results = {};
  // look through each item in allItems)
  for (const item of allItems) {
    // if the variable item exists in itemsToCount
    if (itemsToCount[item]) {
      // if there is already a value in results[item], add one to its count
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }

  }
  return results;

}

module.exports = countOnly;

