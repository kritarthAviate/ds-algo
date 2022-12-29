function largestSubstring(str) {
  let i = 0;
  let strArr = [];
  while (i < str.length) {
    let subString = "";
    let j = i;
    while (!subString.split("").includes(str[j]) && j < str.length) {
      subString += str[j];
      j++;
    }
    strArr.push(subString);
    i++;
  }
  return strArr.sort((a, b) => b.length - a.length)[0];
}

console.log(largestSubstring("abcdabceb"));
