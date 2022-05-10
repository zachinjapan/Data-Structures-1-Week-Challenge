/* a hash table built with using a linked list to store the values to handle collisions. Also the keys are stored so when a
limit is reached the hash table is automatically resized. */

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(key, value) {
    let node = new Node(key, value);
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

  // a bit confusing, but this is used to delete either a speicific value node or just the last node
  deleteFromList(value = null) {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let curr = this.head;
      while (curr.next !== this.tail) {
        if (curr.next.value === value) {
          curr.next = curr.next.next;
          this.length--;
          return curr;
        }
        curr = curr.next;
      }
      this.tail = curr;
      curr.next = null;
      this.length--;
      return curr;
    }
  }
}

class HashTable {
  constructor() {
    this.table = new Array(10);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    console.log(key, value);
    // check if resize is needed
    if (this.size / this.table.length > 0.75) {
      this.resize();
    }
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    this.table[index].addToTail(key, value);
    this.size++;
  }

  get = function (key) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index];
  };

  removeOne = function (key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    if (this.table[index].length === 1) {
      this.table[index] = null;
      this.size--;
      return;
    }
    let curr = this.table[index].head;
    while (curr) {
      if (curr.key === key && curr.value === value) {
        this.table[index].deleteFromList(value);
        this.size--;
        return curr;
      }
      curr = curr.next;
    }
    return null;
  };

  // remove entire table index
  removeMany(key) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    let removedTableSize = this.table[index].length;
    this.table[index] = null;
    this.size -= removedTableSize;
  }

  print = function () {
    console.log("size: ", this.size);
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(this.table[i]);
      }
    }
  };

  resize() {
    console.log("resizing");
    let oldTable = this.table;
    this.table = new Array(oldTable.length * 2);
    this.size = 0;
    for (let i = 0; i < oldTable.length; i++) {
      if (oldTable[i]) {
        let curr = oldTable[i].head;
        while (curr) {
          this.set(curr.key, curr.value);
          curr = curr.next;
        }
      }
    }

    console.log("resized");
    console.log("new array length is ", this.table.length);
  }
}

let myTable = new HashTable();

myTable.set("beer", "tasty");
myTable.set("wine", "salty");
myTable.set("soda", "sweet");
myTable.set("water", "salty");
myTable.set("soda", "sour");
myTable.set("wine", "sweet");
myTable.set("beer", "tasty");
myTable.set("soda", "sweet");
myTable.set("soda", "sour");
myTable.set("water", "salty");
myTable.set("wine", "salty");
// myTable.print();

myTable.removeOne("beer", "tasty");
myTable.removeOne("beer", "tasty");
myTable.removeMany("soda");
// myTable.print();
// console.log(myTable.get("beer"));
myTable.print();

// myTable.print();
