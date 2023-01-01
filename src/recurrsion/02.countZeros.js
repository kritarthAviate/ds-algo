function countZeros(num) {
  if (num / 10 == 0) {
    return 0;
  }
  let x = 0;
  if (num % 10 == 0) {
    x = 1;
  }
  return x + countZeros(Math.floor(num / 10));
}

console.log(countZeros(101000001010190));
