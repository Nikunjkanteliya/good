// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.

// You may assume that the majority element always exists in the array.

// *********

// Example 1:

// Input: nums = [3,2,3]

// Output: 3

// ********

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]

// Output: 2

// let fun = (arr) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         max++;
//       }
//     }
//     if (max > arr.length / 2) {
//       return arr[i];
//     }
//   }

// };
// console.log(fun([2,2,1,1,1,2,2]));
// console.log(fun([2, 2, 1, 1, 1, 2, 2]));

//----------------------------------------------------------------
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]

// Explanation:

// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.

// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.

// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.

// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:

// Input: nums = [0,1,1]

// Output: []

// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]

// Output: [[0,0,0]]

// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

// let fun = (arr) => {
//   let max = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === 0) {
//           max.push([arr[i], arr[j], arr[k]]);
//         }
//       }
//     }
//   }
//   console.log(max);
// };

//  fun([-1, 0, 1, 2, -1, -4]);
//---------------------------------------------------------------------------
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.

// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// ***
// Example 1:

// Input: n = 19

// Output: true

// Explanation:

// 12 + 92 = 82

// 82 + 22 = 68

// 62 + 82 = 100

// 12 + 02 + 02 = 1

// ***

// Example 2:

// Input: n = 2

// Output: false
// *************** 

// Constraints:

// * 1 <= n <= 231 - 1


let fun  = (num) => {
   
  
  
          

}
fun (19)