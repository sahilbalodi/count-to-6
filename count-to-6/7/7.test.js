let a = require('./7');
test('this should return 6 :',function () {
  expect(a(1,2,3)).toBe(2);
});
test('this should return 2 :',function () {
  expect(a(2,2)).toBe(2);
});
test('no argument should return 0 :',function () {
  expect(a()).toBe(0);
});
test('null should return 0 :',function () {
  expect(a(null)).toBe(0);
});
test('null should return 0 :',function () {
  expect(a(-1, 1)).toBe(0);
});
