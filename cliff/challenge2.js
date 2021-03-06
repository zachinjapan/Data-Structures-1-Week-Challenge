// 2. Singely Linked Lists

//    - Research different linked list methods
//    - Create a singley linked list with a good amount of methods, here are a few examples:
//      - add
//      - removeHead ✅
//      - removeTail ✅
//      - contains(val) boolean ✅
//      - findIf(callback) callback should be a function such as (val) => val % 2 === 0 ✅
//      - removeDuplicates
//      - reverseList() ✅
//      - print ✅
//      - printLength ✅

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

  contains(val) {
    let curr = this.head;
    if (!this.head) {
      return null;
    } else {
      while (curr) {
        if (curr.data === val) {
          return true;
        }
        curr = curr.next;
      }
      return false;
    }
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

  findIf(callback) {
    let str = "";
    if (!this.head) {
      return null;
    } else {
      let curr = this.head;
      while (curr) {
        if (callback(curr.data)) {
          str += ` ${curr.data} ->`;
        }
        curr = curr.next;
      }
      if (str.length === 0) return null;
    }
    return str;
  }

  removeDuplicates() {
    let curr = this.head;
    let valueList = {};
    while (curr !== null && curr.next !== null) {
      if (valueList[curr.next.value]) {
        curr.next = curr.next.next;
      } else {
        valueList[curr.next.value] = true;
        curr = curr.next;
      }
    }

    console.log(this.print());
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

  reverse() {
    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let nextNode = null;
    let prevNode = null;

    while (curr) {
      nextNode = curr.next;
      curr.next = prevNode;
      prevNode = curr;
      curr = nextNode;
    }
    return this;
  }
}

let myList = new SLL();

myList.addToTail(2);
myList.addToTail(3);
console.log(myList.contains(3));
myList.addToTail(4);
myList.addToHead(1);
myList.addToHead(0);
myList.addToHead(0);

console.log(myList.print());
myList.reverse();
console.log(myList.print());
console.log(myList.findIf((val) => val % 2 === 0));
myList.removeDuplicates();
