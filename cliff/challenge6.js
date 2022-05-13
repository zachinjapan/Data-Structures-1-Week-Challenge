/* Stacks LIFO (Last In First Out)

-Research different stack methods
-Create a stack with a good amount of methods. Here are a few examples:
----push(value)
----pop
----print */

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size--;
    return temp.value;
  }

  print() {
    let str = "";
    if (this.size === 0) {
      return null;
    } else {
      let curr = this.first;

      while (curr) {
        str += `${curr.data} => `;
        curr = curr.next;
      }
    }
    return str;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.print());
stack.pop();
console.log(stack.print());
