const letterMapping = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function phoneKeyboard(numStr, result = "") {
  if (numStr.length == 0) {
    return console.log(result);
  }
  let num1 = numStr[0];
  let rest = numStr.slice(1);

  for (let i = 0; i < letterMapping[num1].length; i++) {
    let ch = letterMapping[num1][i];
    phoneKeyboard(rest, result + ch);
  }
}

phoneKeyboard("343");
