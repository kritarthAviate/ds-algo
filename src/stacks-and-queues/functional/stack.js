var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function (value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function () {
    const result = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return result;
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  someInstance.storage = function () {
    return storage;
  };

  return someInstance;
};

var newStack = Stack(); //create stack instance
newStack.push(10);
console.log(newStack.storage());
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
console.log(newStack.storage());
newStack.pop();
console.log(newStack.storage());
newStack.pop();
console.log(newStack.storage());
newStack.pop();
console.log(newStack.storage());
console.log(newStack.pop()); // null
