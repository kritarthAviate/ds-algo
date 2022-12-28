function sumOfTriplets(A, x) {
  A.sort((a, b) => a - b);
  let arr = [];
  let startIndex = 0;
  while (startIndex < A.length) {
    let tempIndex = startIndex + 1;
    let endIndex = A.length;
    while (tempIndex < endIndex) {
      if (A[tempIndex] + A[endIndex] + A[startIndex] == x) {
        arr.push([A[tempIndex], A[endIndex], A[startIndex]]);
        break;
      } else if (A[tempIndex] + A[endIndex] + A[startIndex] < x) {
        tempIndex++;
      } else endIndex--;
    }
    startIndex++;
  }
  return { arr };
}

console.log(sumOfTriplets([12, 3, 4, 5, 1, 6, 9], 12));
