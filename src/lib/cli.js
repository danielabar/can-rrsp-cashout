function roundByScale(inputNum) {
  if (inputNum < 10) {
    return roundNearestWhole(inputNum, 1);
  }
  if (inputNum < 100) {
    return roundNearestWhole(inputNum, 10);
  }
  return roundNearestWhole(inputNum, 100);
}

/*!
 * Round to the nearest whole number
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Number|String} num       The numer to round
 * @param  {Number}        precision The whole number to round to (ex. 10, 100, 1000)
 * @param  {String}        method    The rounding method (up, down, or auto - defaults to auto) [optional]
 * @return {String}                  The rounded number
 */
function roundNearestWhole(inputNum, precision, method) {
  // Convert string numbers to a float
  const num = parseFloat(inputNum);

  // If there's no rounding precision, return the number
  if (!precision) return num.toLocaleString();

  // Possible methods and their values
  const methods = {
    auto: 'round',
    up: 'ceil',
    down: 'floor',
  };

  // Get the method function
  let fn = methods[method];
  if (!fn) {
    fn = 'round';
  }

  // Do math!
  return Math[fn](num / precision) * precision;
}

function doit() {
  for (let i = 0; i <= 1000; i += 0.01) {
    const input = Number.parseFloat(i).toFixed(2);
    const output = roundByScale(input);
    // eslint-disable-next-line no-console
    console.log(`${input},${output}`);
  }
}

doit();
