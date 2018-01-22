let sum = require('./sum');

test('should add two numbers ', function () {
  expect(sum(4,5)).toBe(9);
})
