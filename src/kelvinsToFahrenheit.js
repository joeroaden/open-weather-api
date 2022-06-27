export function converter(kelvins) {
  let tempKelvins = kelvins;
  let tempFahrenheit =0;
  tempFahrenheit = Math.round((tempKelvins - 273.15) * 9/5 + 32);
  return tempFahrenheit;
}
export function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    return new Error("Not a valid number!");
  } else {
    return true;
  }
}