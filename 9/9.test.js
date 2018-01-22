let a = require('./9');
test('this should return hi!! ',function () {
  expect(a('hi')).toBe('hi!!');
});
test('this should return 1.5 ',function () {
  expect(a('hi',5)).toBe('hi!!!!!');
});
test('this should return 1.5 ',function () {
  expect(a('')).toBe('');
});
