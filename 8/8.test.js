let a = require('./8');
test('this should return 1.5 ',function () {
  expect(a(1,2)).toBe(1.5);
});
test('this should return 1 ',function () {
  expect(a(undefined , 2)).toBe(1);
});
test('this should return 1.5 ',function () {
  expect(a(0 , undefined)).toBe(.5);
});
test('this should return .5 :',function () {
  expect(a(undefined , undefined)).toBe(.5);
});
