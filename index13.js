// Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

// Example 1:

// Input:
// N = 6
// arr = [7 10 ,4 ,3 ,20 ,15]
// K = 3

// Output : 7

// Explanation :
// 3rd smallest element in the given
// array is 7.

// Example 2:

// Input:
// N = 5
// arr = [7 ,10 ,4 ,20 ,15]
// K = 4

// Output : 15

// Explanation :
// 4th smallest element in the given
// array is 15.

// Your Task:

// You don't have to read input or print anything. Your task is to complete the function kthSmallest() which takes the array arr[], integers l and r denoting the starting and ending index of the array and an integer K as input and returns the Kth smallest element.

// Constraints:

// 1 <= N <= 105

// 1 <= arr[i] <= 105

// 1 <= K <= N

// let fun = (arr,k) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//       }
//     }
//   }
// console.log(arr[k-1]);
// };

// fun([7 ,10 ,4 ,20 ,15],4);

//------------------------------------------------------------------
// Your function must accept 2 arrays, then return the common words from each.
// So, a new array containing the words which occur at least once in each of the supplied arrays must be returned back.

// \Words that are most common throughout both of the arrays should be returned first.

// Example 1:

// Input:

// arr1=["dog", "cat", parrot]

// arr12= ["lizard", "cat", "rat"]

// output:

// ["cat"]

// let fun = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return arr1[i];
//       }
//     }

//   }
//   return false
// };
// console.log(fun(["dog", "cat", "parrot"], ["lizard", "cat", "rat"]));

// find missing number
// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is
// to find the missing number from the first N integers.

// Note: There are no duplicates in the list.

// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8

// Output: 5

// Explanation: The missing number between 1 to 8 is 5

//
// let fun = (arr) => {
//   arr.sort();
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count = count + 1;
//     if (arr[i] != count) {
//       return count;
//     }
//   }
// };
// console.log(fun([1, 2, 4, 6, 3, 7, 8]));
