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
