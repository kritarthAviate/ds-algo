// function sortArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       newArr.unshift(0);
//     } else {
//       newArr.push(1);
//     }
//   }
//   return newArr;
// }

function sortArray(arr) {
  let startIndex = 0;
  let lastIndex = arr.length - 1;

  while (startIndex < lastIndex) {
    while (arr[startIndex] == 0 && startIndex < lastIndex) {
      startIndex++;
    }
    while (arr[lastIndex] == 1 && startIndex < lastIndex) {
      lastIndex--;
    }
    if (startIndex < lastIndex) {
      let temp = arr[startIndex];
      arr[startIndex] = arr[lastIndex];
      arr[lastIndex] = temp;
      startIndex++;
      lastIndex--;
    }
  }
  return arr;
}

console.log(sortArray([0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0]));
