const test = require('node:test');
const assert = require('node:assert/strict');

const { greet } = require('../src/index');

test('greet returns default greeting', () => {
  assert.equal(greet(), 'Hello, world!');
});

test('greet returns personalized greeting', () => {
  assert.equal(greet('Azmi'), 'Hello, Azmi!');
});
