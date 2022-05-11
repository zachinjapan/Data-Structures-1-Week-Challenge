// sorted binary tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class SBT {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.count++;
      return;
    }
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        if (!curr.left) {
          curr.left = newNode;
          this.count++;
          return;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = newNode;
          this.count++;
          return;
        }
        curr = curr.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return null;
    }
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }

  min() {
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    return curr.value;
  }

  max() {
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr.value;
  }

  removeOne(value) {
    let prev = this.root;
    let curr = this.root;

    while (curr) {
      if (curr.value === value) {
        prev.right = curr.right;
        prev.left = curr.left;
        this.count--;
        return;
      }

      prev = curr;
      if (curr.value < value) {
        curr = curr.right;
      }

      if (curr.value > value) {
        curr = curr.left;
      }
    }
  }
}
let myTree = new SBT();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(23);
myTree.insert(22);

console.log(myTree.contains(5));
console.log(myTree);
console.log(myTree.min());
console.log(myTree.max());
myTree.removeOne(22);

console.log(myTree);
// not sure best way to print out the tree
