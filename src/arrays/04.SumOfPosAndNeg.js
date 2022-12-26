function sumOfIntegers(arr) {
  let negativeSum = 0;
  let positiveSum = 0;
  for (let num of arr) {
    if (num < 0) {
      negativeSum += num;
    } else {
      positiveSum += num;
    }
  }
  return { positiveSum, negativeSum };
}

console.log(sumOfIntegers([-1, 5, 8, -18, 3]));
