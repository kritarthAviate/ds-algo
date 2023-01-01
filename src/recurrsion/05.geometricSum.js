function geometricSum(k) {
  if (k == 0) {
    return 1;
  }
  return geometricSum(k - 1) + 1 / 2 ** k;
}

console.log(geometricSum(2));
