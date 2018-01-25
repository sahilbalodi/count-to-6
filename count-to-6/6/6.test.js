let min = require('./6');
test('should return -1 ',() => {
  expect(min(-1,2,3,4,5,6)).toEqual(-1);
})
test('should return -1 ',() => {
  expect(min()).toEqual(Infinity);
})
test('should return -1 ',() => {
  expect(min(1,1)).toEqual(1);
})
