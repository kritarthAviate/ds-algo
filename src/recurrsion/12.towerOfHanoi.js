function towerOfHanoi(n, A, C, B) {
  console.log({ n, A, B, C });
  if (n == 0) {
    return;
  }

  towerOfHanoi(n - 1, A, B, C);

  C.push(A.pop());

  towerOfHanoi(n - 1, B, C, A);
}

towerOfHanoi(6, [1, 2, 3, 4, 5, 6], [], []);
