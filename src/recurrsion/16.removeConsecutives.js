function removeConsecutiveDuplicates(str) {
  if (str.length == 1) {
    return str;
  }

  if (str[0] == str[1]) {
    return removeConsecutiveDuplicates(str.slice(1));
  }

  return str[0] + removeConsecutiveDuplicates(str.slice(1));
}

let result = removeConsecutiveDuplicates("abbbccdddee");
console.log(result);
