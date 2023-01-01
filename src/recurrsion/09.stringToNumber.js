// function stringToNumber(str) {
//   if (str.length == 1) {
//     return +str;
//   }
//   return (
//     +str[str.length - 1] + stringToNumber(str.slice(0, str.length - 1)) * 10
//   );
// }

// console.log(stringToNumber("12345678"));

function stringToNumber(str) {
  if (str.length == 1) {
    return str - "0";
  }
  return (
    stringToNumber(str.slice(0, str.length - 1)) * 10 +
    (str[str.length - 1] - "0")
  );
}

console.log(stringToNumber("12345678"));
