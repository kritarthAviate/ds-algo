function muliply2DArray(arr1, arr2) {
  let finalArr = [];
  for (let i = 0; i < arr1.length; i++) {
    finalArr[i] = [];
    for (let j = 0; j < arr2[0].length; j++) {
      finalArr[i][j] = 0;
      for (let k = 0; k < arr1[0].length; k++) {
        finalArr[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return finalArr;
}

console.log(
  muliply2DArray(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    [
      [5, 6],
      [7, 8],
    ]
  )
);
