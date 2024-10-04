function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    let customDelimiter = parts[0].slice(2);
    customDelimiter = customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    delimiter = new RegExp(customDelimiter);
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter);
  const negativeNumbers = numArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
