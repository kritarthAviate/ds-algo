function printSubsequences(str) {
  findSubsequences(str, str.length);
}

function findSubsequences(str, n, index = -1, curr = "") {
  if (n == index) {
    return;
  }
  if (curr.length > 0) {
    console.log(curr);
  }

  for (let i = index + 1; i < n; i++) {
    curr += str[i];
    findSubsequences(str, n, i, curr);
    curr = curr.slice(0, -1);
  }
  return;
}

printSubsequences("abc");
