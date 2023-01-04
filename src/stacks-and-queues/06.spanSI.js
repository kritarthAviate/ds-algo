// ARRAY APPROACH
// function calculateSpan(arr) {
//   let stockSpan = [];
//   for (let i = 0; i < arr.length; i++) {
//     stockSpan[i] = 0;
//     for (let j = i; j >= 0; j--) {
//       if (arr[i] < arr[j]) {
//         break;
//       }
//       stockSpan[i]++;
//     }
//   }
//   return stockSpan;
// }

// STACK APPROACH
function calculateSpan(arr) {
  let stack = []; // to store the indexes of arr elements which are greater than the value iterated till the point
  let span = [];
  stack.push(0);
  span[0] = 1;

  for (let i = 1; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    if (stack.length == 0) {
      span[i] = i + 1;
    } else {
      span[i] = i - stack[stack.length - 1];
    }
    stack.push(i);
  }
  return span;
}

console.log(calculateSpan([2, 5, 9, 3, 1, 12, 6, 7, 8]));
