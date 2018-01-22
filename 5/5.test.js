let a = require('./5');
console.log(a);
test('should return username: abc and email :abc@gmail.com',() => {
  expect(a).toEqual({ email  : 'abc@gmail.com' , username : 'abc' });
})

// test("should return username : abc and email :abc@gmail.com",() => {
//   expect(a).toEqual({ username : 'abc' , email  : 'abc@gmail.com' });
// })
//
// test("should return username : abc and email :",() => {
//   expect(a).toEqual({ username : 'abc' , email  : '' });
// })
// test("should return username : and email :abc@gmail.com",() => {
//   expect(a).toEqual({ username : '' , email  : 'abc@gmail.com' });
// })
