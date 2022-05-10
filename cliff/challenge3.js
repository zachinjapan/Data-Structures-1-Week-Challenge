// -Research different hash map methods
// -Create a hash map with a good amount of methods, here are a few examples:
// ---Hashing function ✅
// ---set ✅
// ---get ✅
// ---remove ✅
// ---**resize (if the hash map is getting too big use this by comparing the "load factor" to a threshold value and resize if it is greater than the threshold value. the hash map should be resized by doubling the size of the hash map and rehashing all the values into the new hash map.)

let hash = (key) => {
  // let hashedArr = Array(key).reduce((accum, curr, i) => accum + curr.charCode(), 0)
  // return hashedArr.join("")
  hash_value = 0;
  let hashedStr = String(key);
  for (let i = 0; i < hashedStr.length; i++) {
    hash_value += hashedStr.charCodeAt(i);
  }
  return hash_value;
};

class KeyValuePair {
  constructor(key, value, hash, index) {
    this.key = key;
    this.value = value;
    this.hash = hash; // for learning
    this.index = index; //for learning
  }
  toString() {
    return `kvp: \n\t\hash: ${this.hash} \n\tkey: ${this.key} \n\tvalue: ${this.value} \n\tindex: ${this.index}`;
  }
}

class HashTable {
  constructor() {
    this.bucket = Array(10);
    this.size = 0;
  }

  add(key, value) {
    //if key is already in the bucket, then look at buckets index's and
    let hash_value = hash(key);
    let idx = hash_value % this.bucket.length;
    // console.log(`hash value: ${hash_value} \n\t bucket length: ${this.bucket.length} \n\t idx: ${idx}`) //for learning
    if (!this.bucket[idx]) {
      this.bucket[idx] = new Array();
    }
    let probArr = this.bucket[idx];
    for (let i = 0; i < probArr.length; i++) {
      if (probArr[i].key === key) {
        probArr[i].value = value;
        this.size++;
        return;
      }
    }
    probArr.push(new KeyValuePair(key, value, hash_value, idx)); //for learning
    // console.log(probArr) //for learning
    this.size++;
  }

  get(key) {
    let idx = hash(key) % this.bucket.length;
    if (!this.bucket[idx]) {
      return null;
    }
    let probArr = this.bucket[idx];
    for (let i = 0; i < probArr.length; i++) {
      if (probArr[i].key === key) {
        return probArr[i].value;
      }
    }
    return null;
  }

  //take a key and then remove a key value pair if it exists
  remove(key) {
    let idx = hash(key) % this.bucket.length;
    if (!this.bucket[idx]) {
      return null;
    }
    let probArr = this.bucket[idx];
    console.log(probArr);
    for (let i = 0; i < probArr.length; i++) {
      if (probArr[i].key === key) {
        probArr.splice(i, 1);
      }
    }
    this.size--;
    return;
  }

  getBeta(key) {
    let idx = hash(key) % this.bucket.length;
    if (!this.bucket[idx]) {
      // console.log(`no kvp at ${idx}`);
      return null;
    }
    let probArr = this.bucket[idx];
    for (let i = 0; i < probArr.length; i++) {
      if ((probArr[i].key = key)) {
        // console.log(probArr[i])
        return probArr[i];
      }
    }
  }

  toString() {
    let s = "";
    for (let i = 0; i < this.bucket.length; ++i) {
      if (this.bucket[i]) {
        let probArr = this.bucket[i];
        for (let i = 0; i < probArr.length; ++i) {
          s += probArr[i].toString();
          s += "\n";
        }
      }
    }
    return s;
  }
}

let ht = new HashTable();
ht.add("maroon", "#800000");
ht.add("yellow", "#FFFF00");
ht.add("olive", "#808000");
ht.add("salmon", "#FA8072");

ht.add("lightcoral", "#F08080");
ht.add("mediumvioletred", "#C71585");
ht.add("plum", "#DDA0DD");
ht.add("plum", "#duplicate");

console.log(ht.toString());
console.log("-------------------");
console.log("-------------------");
ht.remove("olive");
ht.getBeta("olive");
console.log("-------------------");
console.log("-------------------");
console.log(ht.toString());
