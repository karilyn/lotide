// given an array and a callback, map return a new array
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    let result = callback(item);
    if (result === undefined){
      result = ""
    }
    results.push(result);
  }
  return results;
};

module.exports = map;

