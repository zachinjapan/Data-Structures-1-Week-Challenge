class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.print();
queue.enqueue(3);
queue.peek();
