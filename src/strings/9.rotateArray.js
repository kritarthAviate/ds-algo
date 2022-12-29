function rotateArray(arr) {
  let finalArr = [];
  for (let i = 0; i < arr.length; i++) {
    finalArr[i] = [];
    for (let j = arr.length - 1; j >= 0; j--) {
      finalArr[i].push(arr[j][i]);
    }
  }
  return finalArr;
}

console.log(
  rotateArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
