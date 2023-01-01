var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Stack.prototype.push = function (x) {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  storage[length] = x;
};

Stack.prototype.pop = function () {
  let storage = this.storage;
  let length = Object.keys(storage).length;
  if (length > 0) {
    const result = storage[length - 1];
    delete storage[length - 1];
    return result;
  }
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};

var newStack = new Stack(); //create stack instance
newStack.push(10);
console.log(newStack.storage);
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
console.log(newStack.storage);
newStack.pop();
console.log(newStack.storage);
newStack.pop();
console.log(newStack.storage);
console.log(newStack.pop());
console.log(newStack.storage);
console.log(newStack.pop()); // null
