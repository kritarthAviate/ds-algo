var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.tail = 0;
  this.head = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function () {
  if (this.tail - this.head > 0) {
    const result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  }
};

Queue.prototype.size = function () {
  return this.tail - this.head;
};

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(6);
queue.enqueue(4);
console.log(queue.dequeue());
