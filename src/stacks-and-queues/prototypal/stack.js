var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newObj = Object.create(stackMethods);

  newObj.storage = {};
  newObj.top = 0;

  return newObj;
};

var stackMethods = {
  push: function (x) {
    this.storage[this.top] = x;
    this.top++;
  },
  pop: function () {
    if (this.top > 0) {
      const result = this.storage[this.top - 1];
      delete this.storage[this.top - 1];
      this.top--;
      return result;
    }
  },
  size: function () {
    return this.top;
  },
};

var newStack = Stack(); //create stack instance
newStack.push(10);
newStack.push("dogs");
console.log(newStack.size()); //2
newStack.push(20);
newStack.pop();
newStack.pop();
console.log(newStack.pop());
console.log(newStack.pop()); // null
