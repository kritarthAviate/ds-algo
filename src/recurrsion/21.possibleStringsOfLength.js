function findPossibleStrings(str, k) {
  let result = [];
  possibleStrings(str, "", str.length, k, result);
  return result;
}

function possibleStrings(str, prefix, n, k, result) {
  if (k == 0) {
    result.push(prefix);
    return;
  }

  for (let i = 0; i < n; ++i) {
    let newPrefix = prefix + str[i];
    possibleStrings(str, newPrefix, n, k - 1, result);
  }
}

console.log(findPossibleStrings("xyz", 1));
