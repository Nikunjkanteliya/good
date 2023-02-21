// Find the odd one out in the provided array.

// All array elements are equal, except one. Your function must return this odd one out.

// Example:

// Input=["a","a","a","a","b","a"]

// Output= b

// let fun = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] != arr[j]) {
//         return arr[j];
//       }
//     }
//   }
// };
// console.log(fun(["a", "a", "a", "a", "b", "a"]));

//--------------------------------------
// Deduce the smallest and the largest number from the supplied numeric array.

// Return an array containing these numbers, smallest number first.

// Example:

// Input=[14, 28, 3, 8, 2]
// Output= 2, 28

// let fun = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
// //   console.log (arr.length)

//   return [ arr[0], arr[arr.length-1]]
// };
// console.log(fun([14, 28, 3, 8, 2]));

//-----------------------------------------------------------------------------
// Write a function to separate a single array in to two separate arrays.

// The supplied array will only contain numeric values.

// Your function should output two arrays: one containing odd numbers, the other containing even numbers.

// The returned arrays should be ordered appropriately, with distinct values only (no duplicates).
// The even array should be returned first.

// Example:

// Input=[2, 3, 4, 5, 6, 7, 8]

// Output=[[2, 4, 6, 8] [3, 5, 7]]

// let fun  = (arr) => {
// let even = []
//     let odd = []

//  let evennum =    arr.filter((ele) => { return ele%2===0})
//  even.push (evennum)

//  let oddnum = arr.filter ((ele) => { return ele%2!=0})
//      odd.push(oddnum)

//      return [even , odd].flat()
// }
//  console.log(fun ([2, 3, 4, 5, 6, 7, 8]));

