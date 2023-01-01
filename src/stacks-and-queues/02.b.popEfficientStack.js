function popEfficientStack() {
  let obj = {};

  let queue1 = [];
  let queue2 = [];

  obj.push = function (value) {
    while (queue1 != 0) {
      queue2.push(queue1.shift());
    }
    queue1.push(value);
    while (queue2 != 0) {
      queue1.push(queue2.shift());
    }
  };

  obj.pop = function () {
    return queue1.shift();
  };

  obj.size = function () {
    return queue1.length;
  };

  return obj;
}

var newStack = popEfficientStack(); //create stack instance
newStack.push(10);
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop()); // null
