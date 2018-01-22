let a = require('./7');
test('this should 6 :',function () {
  expect(a(1,2,3)).toBe(2);
});
test('this should 2 :',function () {
  expect(a(2,2)).toBe(2);
});
test('this should 0 :',function () {
  expect(a()).toBe(0);
});
test('this should 0 :',function () {
  expect(a(null)).toBe(0);
});
