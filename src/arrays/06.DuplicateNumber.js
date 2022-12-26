function duplicateNumber(arr) {
  arr.sort();
  let index = 0;
  while (index < arr.length - 1) {
    if (arr[index] == arr[index + 1]) {
      return arr[index];
    }
    index++;
  }
}

console.log(duplicateNumber([1, 5, 7, 8, 2, 3, 6, 9, 4, 0, 7]));
