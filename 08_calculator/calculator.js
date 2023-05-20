const add = function(a, b) {
  const sum = a + b;
	return sum;
};

const subtract = function(a, b) {
	const difference = a - b;
  return difference;
};

const sum = function(arrOfNums) {
  const totalSum = arrOfNums.reduce((a, b) => a + b, 0);
  return totalSum;
};

const multiply = function(arrOfNums) {
  const totalProduct = arrOfNums.reduce((a, b) => a * b);
  return totalProduct;
};

const power = function(base, exponent) {
  let exponentiation = base;
  for (let multiplier = 1; multiplier < exponent; multiplier++) {
    exponentiation *= base;
  }
  return exponentiation;
};

const factorial = function(num) {
  let factorialValue = 1;
  while(num > 0) {
    factorialValue *= num;
    num--;
  }
  return factorialValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};