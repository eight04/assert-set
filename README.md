assert-set
==========

[![Build Status](https://travis-ci.com/eight04/assert-set.svg?branch=master)](https://travis-ci.com/eight04/assert-set)
[![codecov](https://codecov.io/gh/eight04/assert-set/branch/master/graph/badge.svg)](https://codecov.io/gh/eight04/assert-set)

Assertion with `Set`s.

Installation
------------

*npm*

```
npm install -D assert-set
```

Usage
-----

```js
const assertSet = require("assert-set");

assertSet.equal(
  [{foo: 1}, {bar: 2}],
  [{bar: 2}, {foo: 1}]
); // success

assertSet.equal(
  [{foo: 1}, {bar: 2}],
  [{bar: 3}, {foo: 1}]
); // error
```

API
----

### equal

```js
equal(actual: Iterable, expected: Iterable, message?) => void
```

Assert if `actual` deeply equals `expected`. The item can be out of order.


Changelog
---------

* 0.1.0 (Oct 4, 2019)

  - First release.
