// Today's challenge research linked lists and create a singly linked list that has the following methods. AddToTail() addToHead()
// DeleteFromTail()
// ReplaceAll(oldvalue, newvalue)
// FindIf(function that returns true or false)* findIf returns an array of values that the passed in function returns as true.
// PrintList()
// PrintListLength()
// Remove Duplicates()

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
    }
    let oldTail = this.tail;
    oldTail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  print() {
    let str = "";
    if (!this.head) {
      return null;
    } else {
      let curr = this.head;
      while (curr) {
        str += `${curr.data} ->`;
        curr = curr.next;
      }
    }
    return str;
  }
}

let myList = new SLL();

myList.addToTail(2);
console.log(myList.print());
