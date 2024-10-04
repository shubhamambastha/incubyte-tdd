function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numArray = numbers.replace(/\n/g, ",").split(",");

  return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
