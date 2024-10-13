const add = require('../calculator.js')

test('should return 0 for empty string input', () => {
  expect(add("")).toBe(0);
});