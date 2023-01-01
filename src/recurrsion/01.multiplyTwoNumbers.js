function multiplyTwoNumbers(num1, num2) {
  if (num2 == 0) {
    return 0;
  }

  return num1 + multiplyTwoNumbers(num1, num2 - 1);
}

console.log(multiplyTwoNumbers(5, 6));
