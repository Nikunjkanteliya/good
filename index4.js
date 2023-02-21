// let fun = (value) => {
//   let roman = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let total = 0;
//   for (let i = 0; i < value.length; i++) {
//     if (roman[value[i]] < roman[value[i + 1]]) {
//       total = total - roman[value[i]];
//     } else {
//       total = total + roman[value[i]];
//     }
//   }
//   return total;
// };
// console.log(fun("MCMXCIV"));

//------------------------------------------------------------------------------
// Input: pattern = "abba", s = "dog cat cat dog"

// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"

// Output: false

// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"

// Output: false

// let fun = (pattern, string) => {
//   let dod = pattern.split("");
//   for (let i = 0; i < dod.length; i++) {
//   console.log();

//   }

//   let obj = {
//     a: "dog",
//     b: "cat",
//   };
// };
// console.log(fun("abba", ["dog, cat, cat ,dog"]));

//------------------------------------------------------------------sort-------------
let swap = (arr, j, i) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};
let bubble = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, j, i);
      }
    }
  }
  return arr;
};
console.log(bubble([5, 4, 3, 2, 1]));

//-----------------------------another way to solve bubble sort

let fun = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
};
console.log(fun([5, 4, 3, 2, 1]));
