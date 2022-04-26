// preset array length
let myArray = new Array(4);

// empty values can be changed later
myArray[0] = 1;

// pushed values add to the end of the array and don't overwrite
myArray.push(1);

console.log(myArray);

// normal array
let normalArray = [1, 2, 3, 4, 5];

// Array.flat() flattens an array of arrays into a specific depth default is 1 but Infinity can be used to go all the way deep

let crazyArray = [1, 2, 3, [4, 5, [6, 7, [8, 9]]]];

console.log(crazyArray.flat(Infinity));

// expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// heres how to flaten an array with a normal function

const flattenArray = (arr) => {
  let newArr = [];

  const flatten = (arr) => {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
      // if the value is an array go one level deeper
      if (Array.isArray(arr[i])) {
        flatten(arr[i]);
      } else {
        // if the value is not an array push it to the new array
        newArr.push(arr[i]);
      }
    }
  };

  flatten(arr);

  return newArr;
};

console.log(flattenArray(crazyArray));
