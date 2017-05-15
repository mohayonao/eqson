# eqson
[![Build Status](https://img.shields.io/travis/mohayonao/eqson.svg?style=flat-square)](https://travis-ci.org/mohayonao/eqson)
[![NPM Version](https://img.shields.io/npm/v/eqson.svg?style=flat-square)](https://www.npmjs.org/package/eqson)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://mohayonao.mit-license.org/)

> JSON that optimized to have a same reference when a same contents.

## Installation

```
$ npm install --save eqson
```

## Example

```js
const eqson = require("eqson");

const a = { foo: [ 100 ], bar: [ 100 ], baz: [ 10, [ 100 ] ] };
const b = eqson(a);
```

`b` has the same contents as `a`.

```js
assert.deepEqual(a, b);
```

`b.foo` and `b.bar`, `b.baz[1]` have a same reference.

```js
assert(b.foo === b.bar);
assert(b.foo === b.baz[1]);
```

## License

MIT
