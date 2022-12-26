function productOfAllNumbers(arr) {
  return arr.reduce((agg, num) => agg * num, 1);
}

console.log(productOfAllNumbers([4, 8, 30, 99]));
