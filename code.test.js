const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js') + '');

// No cycle, four node, three edge, connected graph.
var test1 = [[0, 1], [1, 2], [2, 3]];
assert(JSON.stringify(hasCycle(test1)) == JSON.stringify(false),
    "Test 1 failed.");

// Cycle, five node, five edge, connected graph.
var test2 = [[0, 1], [1, 2], [1, 3], [3, 4], [4, 0]];
assert(JSON.stringify(hasCycle(test2)) == JSON.stringify(true),
    "Test 2 failed.");

// No cycle, five node, three edge, disconnected graph.
var test3 = [[0, 1], [1, 2], [3, 4]];
assert(JSON.stringify(hasCycle(test3)) == JSON.stringify(false),
    "Test 3 failed.");

// Cycle, six node, five edge, disconnected graph.
var test4 = [[0, 1], [1, 2], [3, 4], [4, 5], [5, 3]];
assert(JSON.stringify(hasCycle(test4)) == JSON.stringify(true),
    "Test 4 failed.");

// No cycle, empty graph.
var test5 = [];
assert(JSON.stringify(hasCycle(test5)) == JSON.stringify(false),
    "Test 5 failed.");