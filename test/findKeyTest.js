const assert = require('chai').assert;
const findKey = require('../findKey');

let movies = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

describe("#findKey", () => {
  it("returns noma for movies with two stars", () => {
    assert.strictEqual(findKey(movies, (x => x.stars === 2)), 'noma');
  });
  it("returns Blue Hill for movies with one star", () => {
    assert.strictEqual(findKey(movies, (x => x.stars === 1)), 'Blue Hill');
  });


});

