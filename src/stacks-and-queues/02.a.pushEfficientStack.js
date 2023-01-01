function pushEfficientStack() {
  let obj = {};

  let queue1 = [];
  let queue2 = [];

  obj.push = function (value) {
    queue1.push(value);
  };

  obj.pop = function () {
    if (queue1.length == 0) return "Empty Stack";
    while (queue1.length != 1) {
      queue2.push(queue1.shift());
    }
    const result = queue1.shift();
    let q = queue1;
    queue1 = queue2;
    queue2 = q;
    return result;
  };

  obj.size = function () {
    return queue1.length;
  };

  return obj;
}

var newStack = pushEfficientStack(); //create stack instance
newStack.push(10);
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop()); // null
