"use strict";

require("run-with-mocha");

const assert = require("assert");
const eqson = require("..");

describe("eqson", () => {
  it("test", () => {
    const a = { foo: [ 100 ], bar: [ 100 ], baz: [ 10, [ 100 ] ] };

    a.qux = a.foo;

    const b = eqson(a);

    assert.deepEqual(a, b);

    assert(b.foo === b.bar);
    assert(b.foo === b.baz[1]);
    assert(b.foo === b.qux);
  });
});
