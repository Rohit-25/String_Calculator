const add = require('../calculator.js')

test('should return 0 for empty string input', () => {
  expect(add("")).toBe(0);
});

test('should return 1 for "1" input', () => {
  expect(add("1")).toBe(1);
});

test('should return 6 for  "1,5" input', () => {
  expect(add("1,5")).toBe(6);
});

test('should return 19 for "1,3,4,5,6" ', () => {
  expect(add("1,3,4,5,6")).toBe(19);
});