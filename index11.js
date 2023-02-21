// Find third largest number in arrray.
// Example :-
// let arr = [1,30,5,70,30,2]

// let fun = (arr) => {
//     for (let i=0;i<arr.length;i++) {
//         for (let j=i+1;j<arr.length;j++ ) {
//             if (arr[i]>arr[j]) {
//                 [arr[i],arr[j]] = [arr[j],  arr[i]]
//             }
//         }
//     }
//     console.log (arr)
// return arr[arr.length-3]
// }
//  console.log(fun ([1,30,5,70,30,2]));

//-------------------------------------------------------------------------
let fun = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (num === 1) {
      arr.push("()".repeat(num));
    } else {
      arr.push("()".repeat(num - i));
    }
  }
  return arr;
};
console.log(fun(1));
//--------------------------------------------------------------------------
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Example 1:

// Input: n = 4

// Output: 4

// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:

// Input: n = 25
// Output: 1389537

// Constraints:

// 0 <= n <= 37

// The answer is guaranteed to fit within a 32-bit integer,

// ie. answer <= 2^31 - 1.

// let fun = (num) => {
//    if (num==0){
//     return num =0
//    }
//    else if (num==1) {
// return num =1
//    }
//    else if  (num==2) {
//     return num =1
//    }
//     else {
//       return  fun(num-1) + fun(num-2) + fun(num-3)
//     }

// }
//  console.log(fun (25));
