function omitConsecutiveDuplicates(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if (str[i] == str[i + 1]) {
      i++;
    }
  }
  return newStr;
}

console.log(omitConsecutiveDuplicates("aabccbaa"));
