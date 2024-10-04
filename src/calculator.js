function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numArray = numbers.split(",");
  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
