var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    storage[tail] = value;
    ++tail;
  };

  someInstance.dequeue = function () {
    if (tail - head > 0) {
      let result = storage[head];
      delete storage[head];
      head++;
      return result;
    }
  };

  someInstance.size = function () {
    return tail - head;
  };

  someInstance.storage = function () {
    return storage;
  };

  return someInstance;
};

const queue = Queue();
queue.enqueue(7);
queue.enqueue(2);
console.log(queue.dequeue());
queue.enqueue(6);
console.log(queue.dequeue());
queue.enqueue(4);
