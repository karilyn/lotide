const assert = require('chai').assert;
const letterPositions = require('../letterPositions');


describe("#letterPositions", () => {
  it("returns [1] for for 'e' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns [2, 3] for for 'l' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("returns [0] for for 'h' in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("returns [0, 10] for for 'l' in 'lighthouse labs'", () => {
    assert.deepEqual(letterPositions("lighthouse labs").l, [0, 10]);
  });

});


