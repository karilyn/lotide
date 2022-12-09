const assert = require('chai').assert;
const countLetters = require('../countLetters');


const result1 = 'lighthouse in the house'

describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for result1", () => {
    assert.deepEqual(countLetters(result1), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
  });
  it("returns { t: 2, e: 1, s: 1, i: 1, n: 1, g: 1 } for 'testing'", () => {
    assert.deepEqual(countLetters('testing'), { t: 2, e: 1, s: 1, i: 1, n: 1, g: 1 });
  });
  // it("returns { i: 2 } for 'i' in result1", () => {
  //   assert.deepEqual(countLetters(result1['i']), { i: 2 });
  // });
  // it("returns { k: 0 } for 'k' in result1", () => {
  //   assert.deepEqual(countLetters(result1['k']), { k: 0 });
  // });

});

