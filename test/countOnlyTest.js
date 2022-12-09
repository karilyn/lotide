const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("#countOnly", () => {
  it("returns {'Jason': 1, 'Fang': 2}", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { 'Jason': 1, 'Fang': 2});
  });
  it("returns {'Salima': 2, 'Agouhanna': 1}", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": false, "Salima": true, "Fang": false, "Agouhanna": true }), {'Salima': 2, 'Agouhanna': 1});
  });

});

