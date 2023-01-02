const convertToCelsius = function(tempInF) {
  let tempInC = (tempInF - 32) * 5/9;
  tempInC = Math.round(tempInC * 10) / 10;
  return tempInC;
};

const convertToFahrenheit = function(tempInC) {
  let tempInF = (tempInC * 9/5) + 32;
  tempInF = Math.round(tempInF * 10) / 10;
  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
