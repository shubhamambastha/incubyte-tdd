const calculator = require("../src/calculator");

test("should return 0 for an empty string", () => {
  expect(calculator.add("")).toBe(0);
});
