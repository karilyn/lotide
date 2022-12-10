const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  let words = ["ground", "control", "to", "major", "tom"];
  it("returns ['g', 'c', 't', 'm', 't'] for the callback (word => word[0])", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  let words2 = ['', '', '', '', '']
  it("returns ['', '', '', '', ''] for the callback (word => word[0])", () => {
    assert.deepEqual(map(words2, word => word[0]), ['', '', '', '', '']);
  });
  const numbers = [1, 2, 3, 4, 5];
  it("returns [2, 4, 6, 8, 10] for the callback (number => number * 2)", () => {
    assert.deepEqual(map(numbers, number => number * 2), [2, 4, 6, 8, 10]);
  });


});

