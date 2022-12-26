// function sumOfPairs(A, x) {
//   let pairs = [];
//   for (let i = 0; i < A.length - 1; i++) {
//     for (let j = i; j < A.length - 1; j++) {
//       if (A[i] + A[j] == x) {
//         pairs.push({ num1: A[i], num2: A[j] });
//       }
//     }
//   }
//   return { pairs };
// }

function sumOfPairs(A, x) {
  A.sort();
  let pairs = [];
  let firstIndex = 0;
  let lastIndex = A.length - 1;
  while (firstIndex < lastIndex) {
    if (A[firstIndex] + A[lastIndex] == x) {
      pairs.push({ num1: A[firstIndex], num2: A[lastIndex] });
    }
    firstIndex += 1;
    lastIndex -= 1;
  }
  return { pairs };
}

console.log(sumOfPairs([1, 2, 3, 8, 5, 22, 9], 10));
