// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// // Example 1:

// // Input: prices = [7,1,5,3,6,4]

// // Output: 5

// // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// // Example 2:

// // Input: prices = [7,6,4,3,1]

// // Output: 0

// // Explanation: In this case, no transactions are done and the max profit = 0.

// // Constraints:

// // 1 <= prices.length <= 105
// // 0 <= prices[i] <= 104

// //------------------------------------------------------------------

// let fun = (arr) => {
//   let min = Math.min(...arr);
//   let a = arr.indexOf(min);
//   let b = arr.splice(a);
//   let max = Math.max(...b);
//   let finale = max - min;
//   if (b.length < 2) {
//     return 0;
//   } else {
//     return finale;
//   }
// };
// console.log(fun([7, 6, 4, 3, 1]));

// //-------------------------------------------------------------------
// // Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// // You must not use any built-in exponent function or operator.

// // For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// //  ****

// // Example 1:

// // Input: x = 4

// // Output: 2

// // Explanation: The square root of 4 is 2, so we return 2.

// // ****

// // Example 2:

// // Input: x = 8

// // Output: 2

// // Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
// // ***********

// // Constraints:

// // * 0 <= x <= 231 - 1



// //------------------------------------------------------
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1

// Output: 2

// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Example 2:

// Input: nums = [0,0,0], target = 1

// Output: 0

// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104
//---------------------------------------------------------------------
// let fun = (arr, tar) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (
//           arr[i] + arr[j] + arr[k] == tar ||
//           arr[i] + arr[j] + arr[k] == tar + 1 ||
//           arr[i] + arr[j] + arr[k] == tar - 1
//         ) {
//           return arr[i] + arr[j] + arr[k];
//         }
//       }
//     }
//   }
// };
// console.log(fun([0, 0, 0], 1));
