function enqueueEfficientQueue() {
  let obj = {};

  let stack1 = [];
  let stack2 = [];

  obj.enqueue = function (value) {
    stack1.push(value);
  };

  obj.dequeue = function () {
    while (stack1.length != 0) {
      stack2.push(stack1.pop());
    }
    const result = stack2.pop();
    while (stack2.length != 0) {
      stack1.push(stack2.pop());
    }
    return result;
  };

  obj.peek = function () {
    while (stack1.length != 0) {
      stack2.push(stack1.pop());
    }
    const result = stack2[stack2.length - 1];
    while (stack2.length != 0) {
      stack1.push(stack2.pop());
    }
    return result;
  };

  obj.size = function () {
    return stack1.length;
  };

  return obj;
}
