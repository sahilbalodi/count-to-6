let a = require('./4');
test('should return ouch :',() => {
  expect(a()).toBe('Ouch!');
})
test('should return ouch :',() => {
  expect(typeof(a()).toBe(typeof(typeof('Ouch!'))));
})
