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
}
let myTree = new SBT();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(3);
myTree.insert(7);
myTree.insert(13);
myTree.insert(17);
console.log(myTree.contains(5));
console.log(myTree);
// not sure best way to print out the tree
