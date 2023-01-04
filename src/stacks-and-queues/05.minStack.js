function minStack() {
  let obj = {};

  let stack1 = [];
  let stack2 = [];

  obj.push = function (value) {
    if (stack2.length == 0 || stack2[stack2.length - 1] > value) {
      stack2.push(value);
    }
    stack1.push(value);
  };

  obj.pop = function () {
    const value = stack1.pop();
    if (stack2.length && value == stack2[stack2.length - 1]) {
      stack2.pop();
    }
  };

  obj.getMinimum = function () {
    return stack2[stack2.length - 1];
  };

  return obj;
}

let stack = minStack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.getMinimum());
stack.push(5);
console.log(stack.getMinimum());
stack.pop();
stack.push(11);
console.log(stack.getMinimum());
stack.push(15);
stack.push(25);
console.log(stack.getMinimum());
