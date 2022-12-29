function sortStringArray(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortStringArray(["qwer", "qqq", "q", "qwerwqer", "qw"]));
