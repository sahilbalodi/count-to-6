let a = require('./3');
test('should return' , function () {
  expect(a()).toBe('abcd');
});
test('should return' , function () {
  expect(a()).toBe('');
});
test('should return' , function () {
  expect(a()).toBe('123');
});
test('should return' , function () {
  expect(typeof(a())).toBe('string');
});
