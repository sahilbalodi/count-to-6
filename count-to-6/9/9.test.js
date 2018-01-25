let a = require('./9');
test('this should return hi!! ',function () {
  expect(a('hi')).toBe('hi!!');
});
test('this should return hi!!!!! ',function () {
  expect(a('hi',5)).toBe('hi!!!!!');
});
test('this should return nothing',function () {
  expect(a('')).toBe('');
});
