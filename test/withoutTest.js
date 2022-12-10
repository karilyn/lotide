const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it("returns ['hello', 'world'] for ['hello', 'world', 'lighthouse'] without ['lighthouse']", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ['hello', 'world']);
  });
  it("returns [2, 3] for [1, 2, 3] without 'lighthouse'", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
