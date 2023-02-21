// Given an integer n, return a string array answer (1-indexed) where:
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// let fun = (n) => {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 == 0) {
//       arr.push("Fizz");
//     } else if (i % 5 == 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }

//   return arr;
// };
// console.log(fun(15));

//-----------------------------------------------------------------------------------
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

// let fun = (arr1, arr2) => {
//   let arrow = [];
//   let arrow2 = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         arrow.push(arr1[i]);
//       }
//     }
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arrow[i]) {
//       arrow2.push(arr1[i]);
//     }
//   }
//   let cat = arrow2.sort((a, b) => {
//     return a - b;
//   });
  
//   arr2.push(cat);
//   console.log(arr2.flat());
// };
// fun([28,6,22,8,44,17], [22,28,8,6]);

//---------------------------example 3----------------------------fibnaci
// let fun = (n) => {
//     if (n<2) {
//         return n
//     }
//     else {
//         return fun(n-1) + fun (n-2)
//     }

// }
//  console.log(fun (3));