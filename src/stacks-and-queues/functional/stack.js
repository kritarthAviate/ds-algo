var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var top = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function () {
    if (top == 0) {
      return "Empty Stack";
    }
    const result = storage[top - 1];
    delete storage[top - 1];
    top--;
    return result;
  };

  someInstance.size = function () {
    return top;
  };

  return someInstance;
};

var newStack = Stack(); //create stack instance
newStack.push(10);
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop());
console.log(newStack.pop()); // null
