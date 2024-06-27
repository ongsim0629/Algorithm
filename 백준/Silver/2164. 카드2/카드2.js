const input = +require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./알고리즘/example.txt").toString().trim();

class Queue {
  constructor() {
    this.storage = new Object();
    this.front = 0;
    this.rear = 0;
  }

  size() {
    return this.rear - this.front;
  }

  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  dequeue() {
    let removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}

let queue = new Queue();

for (let i = 1; i <= input; i++) {
  queue.enqueue(i);
}

while (queue.size() != 1) {
  queue.dequeue();
  let first = queue['front'];
  queue.enqueue(queue['storage'][`${first}`]);
  queue.dequeue();
}
let first = queue['front'];
console.log(queue['storage'][`${first}`]);