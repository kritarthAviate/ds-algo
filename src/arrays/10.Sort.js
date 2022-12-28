function BubbleSort(arr) {
  let isSwapped;
  for (let i = 0; i < arr.length; i++) {
    isSwapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}

function insertionSort(arr) {
  let j, key;
  for (let i = 1; i < arr.length; i++) {
    key = arr[i]; // keeps track of the element at hand
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
// console.log(BubbleSort([64, 34, 25, 12, 22, 11, 90]));

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
