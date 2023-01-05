// function getParenthesis(str, found = false) {
//   if (str.length > 1 && str[0] == ")") {
//     return str[0];
//   }
//   if (str[0] !== "(" && !found) {
//     return getParenthesis(str.slice(1));
//   }

//   return str[0] + getParenthesis(str.slice(1), true);
// }

function getParenthesis(str) {
  if (str[0] == "(" && str[str.length - 1] == ")") {
    return str;
  }
  if (str[0] != "(") {
    return getParenthesis(str.slice(1));
  }
  return getParenthesis(str.slice(0, str.length - 1));
}

console.log(getParenthesis("xyz(abc)12345"));
