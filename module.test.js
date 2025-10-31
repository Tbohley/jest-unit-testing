import mut from './module.js'

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('banana contains numbers', () => {
  expect(mut.containsNumbers('banana')).toBeFalsy();
});

test('12345 contains numbers', () => {
  expect(mut.containsNumbers('12345')).toBeTruthy();
});

test('banana5 contains numbers', () => {
  expect(mut.containsNumbers('banana5')).toBeTruthy();
});

test('20/5 = 4', () => {
  expect(mut.div(20, 5)).toBe(4);
});

test('20/0 = Inf', () => {
  expect(mut.div(20, 0)).toBe(Infinity);
});