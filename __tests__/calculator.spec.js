const calculator = require("../src/calculator");

test("should return 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});

test("should return the number itself for a single number", () => {
  expect(calculator.add("1")).toBe(1);
});

test("should return the sum of two comma-separated numbers", () => {
  expect(calculator.add("1,2")).toBe(3);
});

test("should return the sum of any number of comma-separated numbers", () => {
  expect(calculator.add("1,2,3,4")).toBe(10);
});

test("should handle new lines as delimiter", () => {
  expect(calculator.add("1\n2\n3")).toBe(6);
});

test("should handle new lines as delimiter along with commas", () => {
  expect(calculator.add("1\n2,3")).toBe(6);
});
