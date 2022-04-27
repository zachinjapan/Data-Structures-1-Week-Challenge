//Today is arrays and array methods. Look up multiple ways to initiate an array,
//look up a few array methods, and pick one method and create a function that does
//the exact same thing as the method. (Like pop() => function that takes an array
//and returns the array without the last element

//initiate an array
let arr = [1, 2, 3, 4, 5, 10, 7];

const popSlice = (arr) => {
  //if the array has one or more element, pop the last element
  if (arr.length) {
    return arr.slice(0, arr.length - 1);
  }
  //if the array is empty, return an empty array
  return "array is empty!";
};

console.log(popSlice(arr));
