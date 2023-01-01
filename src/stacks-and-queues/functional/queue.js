var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function (value) {
    let length = Object.keys(storage).length;
    storage[length] = value;
  };

  someInstance.dequeue = function () {
    if (Object.keys(storage).length > 0) {
      let result = storage[0];
      delete storage[0];
      return result;
    }
  };

  someInstance.size = function () {
    return Object.keys(storage).length;
  };

  someInstance.storage = function () {
    return storage;
  };

  return someInstance;
};

const queue = Queue();
queue.enqueue(7);
console.log(queue.storage());
queue.enqueue(2);
console.log(queue.storage());
queue.enqueue(6);
console.log(queue.storage());
queue.enqueue(4);
console.log(queue.storage());
console.log(queue.dequeue());
console.log(queue.storage());
