function escapeRegex(delimiter) {
  return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function parseCustomDelimiter(numbers) {
  const parts = numbers.split("\n");
  let delimiter = parts[0].slice(2);
  delimiter = escapeRegex(delimiter);
  return { delimiter, numbers: parts[1] };
}

function validateAndSum(numbersArray) {
  const negatives = numbersArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }
  return numbersArray.reduce((sum, num) => sum + num, 0);
}

function splitNumbers(numbers, delimiter) {
  return numbers.split(new RegExp(delimiter));
}

function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const result = parseCustomDelimiter(numbers);
    delimiter = result.delimiter;
    numbers = result.numbers;
  }

  const numbersArray = splitNumbers(numbers, delimiter).map((num) =>
    parseInt(num, 10)
  );
  return validateAndSum(numbersArray);
}

module.exports = { add };
