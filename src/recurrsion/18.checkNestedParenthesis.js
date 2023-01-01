function checkNestedParenthesis(str) {
  let strLen = str.length;
  if (strLen == 0) {
    return true;
  }
  if (strLen == 1 && (str == "(" || str == ")")) {
    return false;
  }
  if (str[0] != "(") {
    return checkNestedParenthesis(str.slice(1));
  }
  if (str[strLen - 1] != ")") {
    return checkNestedParenthesis(str.slice(0, strLen - 1));
  }
  if (str[0] == "(" && str[strLen - 1] == ")") {
    return checkNestedParenthesis(str.slice(1, strLen - 1));
  }
}

console.log(checkNestedParenthesis("(a+(b+c))"));
console.log(checkNestedParenthesis("((()))"));
console.log(checkNestedParenthesis("(((x))"));
