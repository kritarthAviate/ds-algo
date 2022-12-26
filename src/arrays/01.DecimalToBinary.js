function decimalToBinary(num) {
  let binArray = [];
  let x = num;
  while (x / 2 != 0) {
    binArray.unshift(x % 2);
    x = Math.floor(x / 2);
  }
  return +binArray.join("");
}

console.log({ 55: decimalToBinary(55) });
console.log({ 100: decimalToBinary(100) });
