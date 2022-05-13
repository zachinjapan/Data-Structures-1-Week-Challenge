/* Queues FIFO (first in first out)

-Research different queue methods
-Create a queue with a good amount of methods. Here are a few examples:
----enqueue(value)
----dequeue
----print */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }

  print() {
    let str = "";
    if (!this.first) {
      return null;
    }
    let curr = this.first;
    while (curr) {
      str += `${curr.val} => `;
      curr = curr.next;
    }
    return str;
  }
}

let myQ = new Queue();

myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
myQ.enqueue(4);

console.log(myQ.print());

myQ.dequeue();
console.log(myQ);
console.log(myQ.print());
