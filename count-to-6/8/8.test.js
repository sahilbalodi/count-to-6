let a = require('./8');
test('min(1,2) should return 1.5 ',function () {
  expect(a(1,2)).toBe(1.5);
});
test('min(undefined , 2) should return 1 ',function () {
  expect(a(undefined , 2)).toBe(1);
});
test('min(0, undefined ) should return 1.5 ',function () {
  expect(a(0 , undefined)).toBe(.5);
});
test('(undefined ,undefined) should return .5 ',function () {
  expect(a(undefined , undefined)).toBe(.5);
});
test('(undefined ,undefined) should return 0 ',function () {
  expect(a( -1 , 1 )).toBe(0);
});
