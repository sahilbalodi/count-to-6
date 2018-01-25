let a = require('./10');
test('this should return empty string ',function () {
  expect(a``).toBe('');
});

test('this should return p> title="something" Hello someone!</p> ',function () {
  let title = 'something';
  let you = 'someone';
  expect(a`<p> title="${title}" Hello ${you}!</p>`
  ).toBe('<p> title="something" Hello someone!</p>');
});
test('this should return p> title="something" Hello someone!</p> ',function () {
  let title = '';
  let you = 'someone';
  expect(a`<p> title="${title}" Hello ${you}!</p>`
  ).toBe('<p> title="" Hello someone!</p>');
});
