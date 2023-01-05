function findSubsets(arr, k, index = -1, newArr = []) {
  if (arr.length == index) {
    return;
  }

  if (newArr.reduce((acc, i) => acc + i, 0) == k) {
    console.log(newArr);
  }

  for (let i = index + 1; i < arr.length; i++) {
    newArr.push(arr[i]);
    findSubsets(arr, k, i, newArr);
    newArr.pop();
  }
  return;
}

findSubsets([1, 2, 3, 4, 5, 6, 7, 8], 12);
