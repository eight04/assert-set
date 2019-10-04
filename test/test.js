/* eslint-env mocha */
const assert = require("assert");
const assertSet = require("..");

describe("equal", () => {
  it("actual is larger than expected", () => {
    assert.throws(() => {
      assertSet.equal([{foo: 1}, {bar: 2}], [{bar: 2}]);
    }, assert.AssertionError);
  });
  it("actual is smaller than expected", () => {
    assert.throws(() => {
      assertSet.equal([{bar: 2}], [{foo: 1}, {bar: 2}]);
    }, assert.AssertionError);
  });
  it("actual is different from expected", () => {
    assert.throws(() => {
      assertSet.equal([{foo: 1}], [{bar: 2}]);
    }, assert.AssertionError);
  });
  it("actual equals expected", () => {
    assertSet.equal([{foo: 1}, {bar: 2}], [{foo: 1}, {bar: 2}]);
  });
  it("actual equals expected, out of order", () => {
    assertSet.equal([{foo: 1}, {bar: 2}], [{bar: 2}, {foo: 1}]);
  });
});
