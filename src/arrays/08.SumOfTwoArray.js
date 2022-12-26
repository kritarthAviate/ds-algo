function sumOfTwoArrays(arr1, arr2) {
  let index = 0;
  let sumArr = [];
  while (index < arr1.length) {
    sumArr[index] = arr1[index] + arr2[index];
    index++;
  }
  return sumArr;
}

console.log(sumOfTwoArrays([1, 2, 4], [4, 5, 6]));
