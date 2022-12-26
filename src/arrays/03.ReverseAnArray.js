// function reverseAnArray(arr) {
//   return arr.reverse();
// }

function reverseAnArray(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    let temp = arr[startIndex];
    arr[startIndex] = arr[endIndex];
    arr[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
  return arr;
}

console.log(reverseAnArray([1, 5, 8, 14]));
