var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = {};

  newObj.storage = {};
  newObj.tail = 0;
  newObj.head = 0;

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
    this.storage[this.tail] = value;
    this.tail++;
  },

  dequeue: function () {
    if (this.tail - this.head > 0) {
      const result = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return result;
    }
  },

  size: function () {
    return this.tail - this.head;
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
