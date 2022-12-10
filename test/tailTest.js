const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns null for []", () => {
    assert.deepEqual(tail([]), null);
  });
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns null for [1]", () => {
    assert.deepEqual(tail([1]), null);
  });

});

