"use strict";

var test = require("tape");
var sortedObject = require("..");

test("does not return the same object", function (t) {
    var input = {};

    t.notEqual(sortedObject(input), input);
    t.end();
});

test("works for empty objects", function (t) {
    t.deepEqual(sortedObject({}), {});
    t.end();
});

test("returns an object with null prototype", function (t) {
    t.equal(Object.getPrototypeOf(sortedObject({})), null);
    t.end();
});

test("does not disturb already-sorted object", function (t) {
    var input = { a: 1, b: 2, c: 3 };
    var output = sortedObject(input);
    var desired = { a: 1, b: 2, c: 3 };

    t.deepEqual(output, desired);
    t.end();
});

test("sorts out-of-order object", function (t) {
    var input = { c: 3, b: 2, a: 1 };
    var output = sortedObject(input);
    var desired = { a: 1, b: 2, c: 3 };

    t.deepEqual(output, desired);
    t.end();
});

test("sorts case-sensitively", function (t) {
    var input = { hello: 3, Hi: 2, HELLO: 1, hi: 4 };
    var output = sortedObject(input);
    var desired = { HELLO: 1, Hi: 2, hello: 3, hi: 4 };

    t.deepEqual(output, desired);
    t.end();
});
