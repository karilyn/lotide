const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns an array when given an array with a single nested level", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  it("returns an array with a single nested level when given array with multiple nested levels", () => {
    assert.deepEqual(flatten([1, 2, [[3], 4], 5, [6]]), [1, 2, [3], 4, 5, 6]);
  });

  it("returns an empty array when given an empty array", () => {
    assert.deepEqual(flatten([]), []);
  });

});

