
// return the first key which contains the given value
// if no given value is found, return undefined
const findKeyByValue = function(objectToSearch, value) {
  const keyResult = Object.keys(objectToSearch);
  for (const key of keyResult) {
    if (objectToSearch[key] === value) {
      return key;
    }
  }
}


module.exports = findKeyByValue;


