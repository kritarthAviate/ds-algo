function printSubsets(arr, index = -1, newArr = []) {
  if (arr.length == index) {
    return;
  }
  if (newArr.length > 0) {
    console.log(newArr);
  }

  for (let i = index + 1; i < arr.length; i++) {
    newArr.push(arr[i]);
    printSubsets(arr, i, newArr);
    newArr.pop();
  }
  return;
}

printSubsets([1, 2, 3, 4]);
