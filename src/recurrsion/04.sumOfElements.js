function sumOfElements(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  let element = arr.shift();
  return element + sumOfElements(arr);
}

console.log(sumOfElements([1, 2, 3, 4, 5, 6]));

function findSum(A, N) {
  if (N <= 0) return 0;
  return findSum(A, N - 1) + A[N - 1];
}

// Driver code

let A = [1, 2, 3, 4, 5];
let N = A.length;
console.log(findSum(A, N));
