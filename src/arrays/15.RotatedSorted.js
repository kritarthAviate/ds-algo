function findRotationCount(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i + 1;
    }
  }
}

console.log(findRotationCount([5, 6, 7, 1, 2, 3, 4]));
