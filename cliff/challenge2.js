// 2. Singely Linked Lists

//    - Research different linked list methods
//    - Create a singley linked list with a good amount of methods, here are a few examples:
//      - add
//      - removeHead
//      - removeTail
//      - contains
//      - findIf(callback)
//      - removeDuplicates
//      - print
//      - printLength

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldTail = this.tail;
      oldTail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  addToHead(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    this.length++;
    return this;
  }

  deleteFromTail() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head;
      while (curr.next !== this.tail) {
        curr = curr.next;
      }
      this.tail = curr;
      curr.next = null;
      this.length--;
      return curr;
    }
  }

  deleteFromHead() {
    if (!this.head) {
      return null;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
    return this;
  }

  print() {
    let str = "";
    if (!this.head) {
      return null;
    } else {
      let curr = this.head;
      while (curr) {
        str += ` ${curr.data} ->`;
        curr = curr.next;
      }
    }
    return str;
  }

  printLength() {
    let count = 0;
    if (!this.head) {
      return null;
    } else {
      let curr = this.head;
      while (curr) {
        count++;
        curr = curr.next;
      }
    }
    return count;
  }
}

let myList = new SLL();

myList.addToTail(2);
myList.addToTail(3);
myList.addToTail(4);
myList.addToHead(1);
myList.addToHead(0);
myList.deleteFromTail();
myList.deleteFromHead();

console.log(myList.print());
console.log(myList.printLength());
