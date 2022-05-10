class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }

  contains(value) {
    return this.items.indexOf(value) !== -1;
  }

  print() {
    console.log(this.items);
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
myStack.print();

console.log(myStack.peek());
console.log(myStack.isEmpty());
console.log(myStack.getSize());
console.log(myStack.contains(1));
