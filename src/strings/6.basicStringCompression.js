function basicStringCompression(str) {
  let i = 0;
  let newStr = "";
  while (i < str.length) {
    let repeatCount = 1;
    newStr += str[i];
    while (str[i] == str[i + 1]) {
      repeatCount++;
      i++;
    }
    if (repeatCount != 1) {
      newStr += repeatCount;
    }
    i++;
  }
  return newStr;
}

console.log(basicStringCompression("aaabbccds"));
