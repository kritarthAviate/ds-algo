function sumOfDigits(num) {
  if (num / 10 == 0) {
    return num % 10;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(123456));
