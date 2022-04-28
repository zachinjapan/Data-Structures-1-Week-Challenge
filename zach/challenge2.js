class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(val) {
    let currNode = new Node(val);

    if (!this.head) {
      this.head = currNode;
      this.tail = currNode;
    } else {
      this.tail.next = currNode;
      this.tail = currNode;
    }
    this.length++;
  }

  removeHead() {
    if (!this.head) return null;

    let removedHead = this.head;
    this.head = this.head.next;
    this.length--;
    return removedHead;
  }

  removeTail() {
    if (!this.head) return null;

    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }

    let removedTail = current.next;
    this.tail = current;
    current.next = null;
    this.length--;
    return removedTail;
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  }

  findIf(callback) {
    let curr = this.head;
    let found = [];
    while (curr) {
      if (callback(curr.value)) {
        found.push(curr.value);
      }
      curr = curr.next;
    }

    if (found.length === 0) return null;
    return found;
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

  // 1,2,3,4

  reverse() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr) {
      //  next 2 -> 3,4
      next = curr.next;
      //  curr 1 -> null
      curr.next = prev;
      //  prev 1 -> null
      prev = curr;
      //  curr 1 -> null
      curr = next;
      // 2 -> 3,4
    }

    // gif of the process (still a little confusing)
    //https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif

    this.head = prev;

    return this;
  }

  print() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.value + " ";
      curr = curr.next;
    }
    return str;
  }

  printLength() {
    return this.length;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let myList = new SLL();
myList.add(2323);
myList.add(1);
myList.add(2);
myList.add(3);
myList.add(4);
myList.add(4);
myList.add(2);
myList.add(3234234);
myList.removeTail();
myList.removeHead();
console.log(myList.contains(3));
// find even numbers
console.log(myList.findIf((val) => val % 2 === 0));
console.log(myList.print());
myList.removeDuplicates();
console.log(myList.print());
console.log(myList);
console.log(myList.reverse());
console.log(myList.print());
