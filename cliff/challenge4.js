// Sorted Binary Search Trees

// --Research different binary search tree methods
// --Create a binary search tree with a good amount of methods. Here are a few examples:
// ----insert(value) ✅
// ----remove(value)
// ----findMax and findMin ✅
// ----*print ✅
// ----contains(value) ✅
// ----find(value) ✅

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new Node(val);
    //check to see if there is a root node, if not make the new node the root
    if (!this.root) {
      this.root = node;
      return;
    } else {
      let curr = this.root;
      //start a loop
      while (curr) {
        //if the curr value is the same as the input value then just return (no duplicates)
        if (curr.val === val) {
          return;
        }
        //if the value is less than the curr value go left
        if (val < curr.val) {
          //if there is no node to the left make the new node the left
          if (!curr.left) {
            curr.left = node;
            return;
          }
          //if there is a node on the left make that node the new check and start back at the top of the loop
          else {
            curr = curr.left;
          }
        }
        //if the value is greater than the curr value go right
        if (val > curr.val) {
          //if there is no right make the right the new node
          if (!curr.right) {
            curr.right = node;
            return;
          }
          //if there is a right value make the right the curr and start back at the top of the loop
          else {
            curr = curr.right;
          }
        }
      }
      return this;
    }
  }

  findMin() {
    let curr = this.root;
    while (curr.left) {
      curr = curr.left;
    }
    console.log(curr.val);
    return curr.val;
  }

  findMax() {
    let curr = this.root;
    while (curr.right) {
      curr = curr.right;
    }
    console.log(curr.val);
    return curr.val;
  }

  printInOrder() {
    let min = findMin;
  }

  find(val) {
    //check if there is a root and if not we are done searching
    if (this.root === null) {
      return false;
    }
    let curr = this.root;
    let found = false;
    //create a loop while curr exists and it hasn't been found
    while (curr && !found) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return `${val} not found in tree`;
    }
    return curr;
  }

  remove(val) {
    //base case
    if (this.root === null) {
      return false;
    }
    let curr = this.root;
    let parent = null;
    let found = false;
    //create a loop while curr exists and it hasn't been found
    while (curr && !found) {
      if (val < curr.val) {
        parent = curr;
        curr = curr.left;
      } else if (val > curr.val) {
        parent = curr;
        curr = curr.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return `${val} not found in tree`;
    }
    //if the node has no children
    if (curr.left === null && curr.right === null) {
      if (parent.left === curr) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //if the node has one child
    if (curr.left === null || curr.right === null) {
      if (curr.left) {
        if (parent.left === curr) {
          parent.left = curr.left;
        } else {
          parent.right = curr.left;
        }
      } else {
        if (parent.left === curr) {
          parent.left = curr.right;
        } else {
          parent.right = curr.right;
        }
      }
    }
    //if the node has two children
    if (curr.left && curr.right) {
      let successor = curr.right;
      let successorParent = curr;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }
      curr.val = successor.val;
      if (successorParent.left === successor) {
        successorParent.left = null;
      } else {
        successorParent.right = null;
      }
    }
    return this;
  }

  contains(val) {
    //check if there is a root and if not we are done searching
    if (this.root === null) {
      return false;
    }
    let curr = this.root;
    //create a loop while curr exists and it hasn't been found
    while (curr) {
      if (val < curr.val) {
        curr = curr.left;
      } else if (val > curr.val) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let bt = new BinaryTree();

bt.insert(50);
bt.insert(3);
bt.insert(10);
bt.insert(7);
bt.insert(57);

console.log(bt);
bt.remove(10);
console.log(bt.find(3));
