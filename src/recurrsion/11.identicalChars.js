function pairStar(str) {
  if (str.length == 0) {
    return "";
  }
  if (str[0] == str[1]) {
    return str[0] + "#" + pairStar(str.slice(1));
  }
  return str[0] + pairStar(str.slice(1));
}

console.log(pairStar("hello"));
console.log(pairStar("xxyy"));
console.log(pairStar("aaaa"));
