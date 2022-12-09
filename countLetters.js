

// str is the string we need to look at
const countLetters = function(str) {
  // we want the result to be an object
  const results = {};
  //we want to remove spaces because they don't need to be counted
  str = str.replace(/\s+/g, '');
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;

