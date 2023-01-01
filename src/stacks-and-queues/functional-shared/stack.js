var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = { storage: {} };

  extend(newObj, stackMethods);

  return newObj;
};

var extend = function (obj, stackMethods) {
  for (let key in stackMethods) {
    obj[key] = stackMethods[key];
  }
};

var stackMethods = {
  push: function (x) {
    this.storage[Object.keys(this.storage).length] = x;
  },
  pop: function () {
    let length = Object.keys(this.storage).length;
    if (length > 0) {
      var result = this.storage[length - 1];
      delete this.storage[length - 1];
      return result;
    }
  },
  size: function () {
    return Object.keys(this.storage).length;
  },
};

var newStack = Stack(); //create stack instance
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
