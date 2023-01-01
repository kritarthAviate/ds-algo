var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.top = 0;
};

Stack.prototype.push = function (x) {
  let storage = this.storage;
  storage[this.top] = x;
  this.top++;
};

Stack.prototype.pop = function () {
  let storage = this.storage;
  if (this.top > 0) {
    const result = storage[this.top - 1];
    delete storage[this.top - 1];
    this.top--;
    return result;
  }
};

Stack.prototype.size = function () {
  return this.top;
};

var newStack = new Stack(); //create stack instance
newStack.push(10);
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
newStack.pop();
newStack.pop();
console.log(newStack.pop());
console.log(newStack.pop()); // null
