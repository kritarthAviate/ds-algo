function replace(str, ch1, ch2) {
  if (str.length == 0) {
    return "";
  }
  if (str[0] == ch1) {
    str = ch2 + str.slice(1);
  }

  return str[0] + replace(str.slice(1), ch1, ch2);
}

console.log(replace("abcbad", "a", "e"));
