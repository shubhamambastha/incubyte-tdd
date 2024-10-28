function escapeRegex(delimiter) {
  return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function parseCustomDelimiter(numbers) {
  const parts = numbers.split("\n");
  let delimiter = parts[0].slice(2);
  delimiter = escapeRegex(delimiter);
  return { delimiter, numbers: parts[1] };
}

function validate(numbersArray) {
  const negatives = numbersArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  return numbersArray;
}

function calculateSum(numbersArray) {
  return numbersArray.reduce((sum, num) => sum + num, 0);
}

function splitNumbers(numbers, delimiter) {
  return numbers.split(new RegExp(delimiter));
}

function add(inputString) {
  if (inputString === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  let numberString = inputString;

  if (inputString.startsWith("//")) {
    const result = parseCustomDelimiter(inputString);
    delimiter = result.delimiter;
    numberString = result.numbers;
  }

  const numbersArray = validate(
    splitNumbers(numberString, delimiter).map((num) => parseInt(num, 10))
  );

  return calculateSum(numbersArray);
}

module.exports = { add };
