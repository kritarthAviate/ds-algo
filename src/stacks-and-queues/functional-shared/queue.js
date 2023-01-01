var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = { storage: {} };

  extend(newObj, queueMethods);

  return newObj;
};

function extend(obj, methods) {
  for (let key in methods) {
    obj[key] = methods[key];
  }
}

var queueMethods = {
  enqueue: function (value) {
    let length = Object.keys(this.storage).length;
    this.storage[length] = value;
  },
  dequeue: function () {
    if (Object.keys(this.storage).length > 0) {
      const result = this.storage[0];
      delete this.storage[0];
      return result;
    }
  },
  size: function () {
    return Object.keys(this.storage).length;
  },
};

const queue = Queue();
queue.enqueue(7);
console.log(queue.storage);
queue.enqueue(2);
console.log(queue.storage);
queue.enqueue(6);
console.log(queue.storage);
queue.enqueue(4);
console.log(queue.storage);
console.log(queue.dequeue());
console.log(queue.storage);
