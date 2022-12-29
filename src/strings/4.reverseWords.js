function reverseWords(str) {
  return str
    .split(" ")
    .map((s) => s.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("Welcome to Coding Ninjas"));
