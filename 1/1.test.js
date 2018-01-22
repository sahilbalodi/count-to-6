let a = require('./1');
test('this should print ',function () {
  expect(a('HELLO ES6')).toBe('HELLO ES6');
});

test('this should print ',function () {
  expect(a('HELLO')).toBe('HELLO');
});

test('this should print ',function () {
  expect(a('')).toBe('');
});

test('this should print ',function () {
  expect(a(undefined)).toBe(undefined);
});

test('this should print ',function () {
  expect(a(null)).toBe(null);
});
