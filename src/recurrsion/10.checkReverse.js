function checkReverse(str, revStr) {
  if (str.length != revStr.length) {
    return false;
  }
  if (str.length == 0 && revStr == str) {
    return true;
  }
  if (str[0] != revStr[str.length - 1]) {
    return false;
  }

  return checkReverse(str.slice(1), revStr.slice(0, revStr.length - 1));
}

console.log(checkReverse("abcd", "dcbaa"));
