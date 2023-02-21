// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.

// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// ***
// Example 1:

// Input: digits = [1,2,3]

// Output: [1,2,4]

// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// ****

// let fun = (arr) => {
//   let del = arr.pop();

//   if (del + 1 >= 10) {
//     let a = del + 1;

//     let b = a.toString();

//     let c = Array.from(b);

//     arr.push(c);
//   } else {
//     arr.push(del + 1);
//   }

//   return arr.flat();
// };
// console.log(fun([20]));

//--------------------------------------------------------------
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must be unique and you may return the result in any order.
// ***
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// ****
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
// ****
// Constraints:
// * 1 <= nums1.length, nums2.length <= 1000
// * 0 <= nums1[i], nums2[i] <= 1000

// let fun = (arr1,arr2) => {
//     let arr = []
//     for (let i=0;i<arr1.length;i++) {

//         for (let j=0;j<arr2.length;j++) {

//           if (arr1[i]==arr2[j]) {
//              arr.push(arr1[i])
//           }
//         }
//     }
//     let abc = [...new Set(arr)]
// return abc
// }
//   console.log(fun ([4,9,5],[9,4,9,8,4]));

//---------------------------------------------------------------
// let fun = (note, mag) => {
//   let j;

//   let arr = [];
//   for (let i = 0; i < note.length; i++) {
//     if (note.length === 1) {
//         j = 0;
//       }else {
//         j=i+1
//       }
//     for (j = j; j < mag.length; j++) {
//       if (note[i] == mag[j]) {
//         arr.push((note[i] = null));
//       } else {
//         arr.push(note[i]);
//       }
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == null) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// console.log(fun("aa", "aab"));

//-----------------------------------------------------
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order

let fun = (arr, tar) => {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === tar) {
          console.log(arr[i], arr[j]);
        }
      }
    }
  } else {
    return console.log("object");
  }
};
fun([1, 2, 3, 4, 5], 4);
