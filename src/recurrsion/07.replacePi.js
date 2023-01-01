function replacePi(str) {
  if (str.length < 2) {
    return str;
  }

  if (str[0] == "p" && str[1] == "i") {
    return "3.14" + replacePi(str.slice(2));
  }
  return str.slice(0, 1) + replacePi(str.slice(1));
}

console.log(replacePi("pip"));
