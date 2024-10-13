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

test('should handle new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should support different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an error for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

 test('should return 0 if input contains just a delimiter and no numbers', () => {
    expect(add("//;\n;")).toBe(0);
  });