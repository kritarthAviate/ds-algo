function findEquilibriumPoint(arr) {
  let midPoint = Math.floor(arr.length / 2);
  let leftSum = 0;
  let rightSum = 0;
  while (midPoint < arr.length && midPoint > 0) {
    for (let i = 0; i < midPoint; i++) {
      leftSum += arr[i];
    }
    for (let j = arr.length - 1; j > midPoint; j--) {
      rightSum += arr[j];
    }
    if ((leftSum = rightSum)) {
      return midPoint;
    }
    if (leftSum < rightSum) {
      midPoint++;
    } else {
      midPoint--;
    }
  }
}

console.log(findEquilibriumPoint([-5, -2, 1, 5, 2, -4, 3, 0]));
