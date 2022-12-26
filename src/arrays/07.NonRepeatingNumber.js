function nonRepeatingNumber(arr) {
  arr.sort();
  let index = 0;
  while (index < arr.length - 1) {
    if (arr[index] !== arr[index + 1]) {
      return arr[index];
    }
    index += 2;
  }
}

console.log(nonRepeatingNumber([5, 2, 6, 7, 5, 6, 2, 9]));
