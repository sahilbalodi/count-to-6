let a = require('./1');
test('this should print HELLO ES6 ',function () {
  expect(a('HELLO ES6')).toBe('HELLO ES6');
});

test('this should print Hello ',function () {
  expect(a('HELLO')).toBe('HELLO');
});

test('this should print empty string',function () {
  expect(a('')).toBe('');
});

test('this should not print anything',function () {
  expect(a(undefined)).toBe(undefined);
});

test('this should print ',function () {
  expect(a(null)).toBe(null);
});
