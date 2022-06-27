export default function converter(kelvins) {
  let tempKelvins = kelvins;
  let tempFahrenheit =0;
  tempFahrenheit = Math.round((tempKelvins - 273.15) * 9/5 + 32);
  return tempFahrenheit;
}