function dequeueEfficientQueue() {
  let obj = {};

  let stack1 = [];
  let stack2 = [];

  obj.enqueue = function (value) {
    while (stack1.length != 0) {
      stack2.push(stack1.pop());
    }
    stack1.push(value);
    while (stack2.length != 0) {
      stack1.push(stack2.pop());
    }
  };

  obj.dequeue = function (value) {
    if (stack1.length == 0) {
      return "Empty Queue";
    }
    return stack1.pop();
  };

  obj.peek = function (value) {
    return stack1[stack1.length - 1];
  };

  obj.size = function () {
    return stack1.length;
  };

  return obj;
}
