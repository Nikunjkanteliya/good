// let fun = (arr,tar) => {
//     let arrp = []
//     for (let i = 0 ; i<arr.length;i++){
//         for (let j = i+1; j<arr.length;j++){
//             if (arr[i]+arr[j] === tar){
//                 arrp.push(i)
//                 arrp.push(j)
//             }
//         }
//     }
//      return arrp
// }
// console.log(fun ([3,2,4],6))

// //---------------------ugly number-----------------------------
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

// Given an integer n, return true if n is an ugly number.

// Example 1:

// Input: n = 6

// Output: true

// Explanation: 6 = 2 × 3

// Example 2:

// Input: n = 1

// Output: true

// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

// Example 3:

// Input: n = 14

// Output: false

// Explanation: 14 is not ugly since it includes the prime factor 7.

// Constraints:

// -231 <= n <= 231 - 1

let fun = (target , arr) => {
    for (let i = 0;i<arr.length;i++) {
        for (let j = i+1; j<arr.length;j++) {
            if (target===1) {
  return true
            }
           else if (arr[i]*arr[j]===target) {
                return true
            }

            else {return false}
        }

    }

}
console.log(fun (6 , [2,3,5]));

// let fun = (arr, target) => {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         arr1.push(i);
//         arr1.push(j);
//       }
//     }
//   }
//   return arr1;
// };
// console.log(fun([1, 2, 3, 4, 5], 3));
