function findGCD(a, b) {
  if (a == b) return a;

  if (a > b) return findGCD(a - b, b);
  return findGCD(a, b - a);
}

console.log(findGCD(19, 13));
