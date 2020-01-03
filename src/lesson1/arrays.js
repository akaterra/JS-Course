function filterNumbersAndMultiplyBy(array, multiplier) {
  if (typeof multiplier !== 'number') {
    throw new Error('multiplier should be a number');
  }

  if (!Array.isArray(array)) {
    throw new Error('array expected');
  }

  return array.filter((item) => typeof item === 'number').map((item) => item * 2);
}

function filterNumbersDivisibleBy(array, divisor) {
  if (typeof divisor !== 'number') {
    throw new Error('divisor should be a number');
  }

  if (!Array.isArray(array)) {
    throw new Error('array expected');
  }

  return array.filter((item) => typeof item === 'number' && item % divisor === 0);
}

module.exports = {
  filterNumbersAndMultiplyBy,
  filterNumbersDivisibleBy,
}
