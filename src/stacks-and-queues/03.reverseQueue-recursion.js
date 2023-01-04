// function reverseQueue(queue, arr = []) {
//   if (queue.length == 0) {
//     return;
//   }
//   arr.push(queue.shift());
//   reverseQueue(queue, arr);
//   queue.push(arr.pop());
//   return queue;
// }

function reverseQueue(queue) {
  if (queue.length == 0) {
    return;
  }
  let x = queue.shift();
  reverseQueue(queue);
  queue.push(x);
  return queue;
}

console.log(reverseQueue([1, 2, 3, 4, 5]));
