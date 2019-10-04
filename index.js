const assert = require("assert");
const deepEqual = require("deep-equal");

function equal(actual, expected, message) {
  actual = new Set(actual);
  expected = new Set(expected);
  outer: for (const a of actual) {
    for (const b of expected) {
      if (deepEqual(a, b)) {
        actual.delete(a);
        expected.delete(b);
        continue outer;
      }
    }
  }
  assert.deepStrictEqual([...actual], [...expected], message);
}

module.exports = {equal};
