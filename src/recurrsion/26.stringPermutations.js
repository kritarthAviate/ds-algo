function stringPermutations(str, asf = "") {
  if (str.length == 0) {
    console.log(asf);
  }

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    const ros = str.slice(0, i) + str.slice(i + 1);
    stringPermutations(ros, asf + ch);
  }
}

stringPermutations("abc");
