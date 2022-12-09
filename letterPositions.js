const letterPositions = function(sentence) {
  // return an object
  const results = {};
  // remove all spaces
  sentence = sentence.replace(/\s+/g, '');

  for (let i = 0; i < sentence.length; i++) {
    // key is the character at that index in the string
    let key = sentence[i];
    // check to see if the key character is an array or not
    if (!Array.isArray(results[key])) {
      // if it's not already an array, initialize a new empty array
      results[key] = [];
    }
    //push the index number as a value into the key
    results[key].push(i);
  }

  return results;
};
console.log(letterPositions("hello"));

module.exports = letterPositions;
