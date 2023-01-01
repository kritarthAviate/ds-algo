// function printNumbers(n) {
//   if (n < 1) {
//     return;
//   }
//   printNumbers(n - 1);
//   console.log(n);
// }

// printNumbers(100);

function numberDictionaryUtility(current, n, result) {
  if (current > n) {
    return;
  }
  result.push(current);

  for (let i = 0; i < 10; i++)
    numberDictionaryUtility(current * 10 + i, n, result);
}

function printNumberDictionary(n) {
  let result = [];

  for (let i = 1; i <= 9; i++) {
    numberDictionaryUtility(i, n, result);
  }

  return result;
}

console.log(printNumberDictionary(5));
