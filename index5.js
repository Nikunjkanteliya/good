//Remove the duplicates from the unsorted Array

// Input : arr = [1,2,2,43,44,5,3,3,1,1,1,3,4,54,"4","1", "a", "b", "c" ,"a", "b", "c"  ]

// Output : [
//   '1', 2,  3,  4,   5,
//   43,  44, 54, 'a', 'b',
//   'c'
// ]

// let fun  = (arr) => {
//     let aa = arr
//    let a  = [...new Set(aa)]
//    return a
// }
//  console.log(fun([ 1,2,2,43,44,5,3,3,1,1,1,3,4,54,"4","1", "a", "b", "c" ,"a", "b", "c"    ]));

// let fun = (arr) => {
//   let arr1 = []

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//      if (arr[i] == arr[j]) {
//        (arr[i]=null)
//      }

//     }
//   }
//    for (let i=0 ;i<arr.length;i++) {
//     if (arr[i]!=null) {
//     arr1.push(arr[i])
//     }
//    }

//    return arr1.sort((a,b) => {return a-b})
// };
// console.log(fun([
//     1,
//     2,
//     2,
//     43,
//     44,
//     5,
//     3,
//     3,
//     1,
//     1,
//     1,
//     3,
//     4,
//     54,
//     "4",
//     "1",
//     "a",
//     "b",
//     "c",
//     "a",
//     "b",
//     "c",
//   ]));

//------------------------------------------------------------------
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"

// Output: 3

// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: "bbbbb"

// Output: 1

// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"

// Output: 3

// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence
// and not a substring.

// let fun = (stri) => {
//   let arr = [];
//   let a = stri.split("");
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] !== a[j]) {
//         arr.push(a[i]);
//       }
//     }
//   }

//   let result = [...new Set(arr)];

//   if (result.length < 1) {
//     return 1;
//   }
//   console.log(result)
//   return result.length;
// };
// console.log(fun("pwwkew"));


//-------------------------------------------------------------------------------
// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.
// Example 1:
// Input: nums = [1,2,2,3,1]
// Output: 2
let fun = (arr) => {
    let arr1 = []
for (let i = 0 ; i<arr.length;i++) {
    for (let j=i+1;j<arr.length;j++) {
        if (arr[i]===arr[j]) {
            // console.log(arr[i])
            arr1.push(arr[i])
        }
    }
    
}

console.log(arr1);

}
fun([1,2,2,3,1,4,2])