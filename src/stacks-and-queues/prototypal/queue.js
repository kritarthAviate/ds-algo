var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newObj = Object.create(queueMethods);

  newObj.storage = {};

  return newObj;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue: function () {
    let length = Object.keys(this.storage).length;
    if (length > 0) {
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
