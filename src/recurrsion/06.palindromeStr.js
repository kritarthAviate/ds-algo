function checkPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] != str[str.length - 1]) {
    return false;
  }

  return checkPalindrome(str.slice(1, str.length - 1));
}

console.log(checkPalindrome("12344321"));
