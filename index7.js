// Find the second Largest Number in the Unsorted Array without using any inbuild method

// Example 1:

// Input : arr = [9,7,10,7,11,14,13]

// Output : 13

// Example 2:

// Input : arr = [8,3,33,45,67,90,87,88]

// Output : 88

// let fun = (arr) => {
// for (let i=0;i<arr.length;i++) {
//     for (let j = i+1;j<arr.length;j++) {
//         if (arr[i] >arr[j]) {
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
// }
// return  arr[arr.length-2]
// }
// console.log (fun ([8,3,33,45,67,90,87,88]))

//-----------------------------------------------
// Find the least sum of the Unsorted array Without using any inbuild methods

// Example 1

// Input : arr = [1,8,9,7,9,5,3]

// Output : 6

// Example 2

// Input : arr = [11,18,19,20,13,12,15]

// Output : 23

// let fun = (arr) => {

// for (let i=0;i<arr.length;i++) {
//     for (let j =i+1;j<arr.length;j++) {
//         if (arr[i]>arr[j]) {
//             [arr[i] ,arr[j]] = [arr[j], arr[i]]
//         }
//     }
// }
// return arr[0]+arr[1]

// }

// console.log(fun ([11,18,19,20,13,12,15]));

//----------------------------------------------------------------------------------
// Write a function to find the longest common prefix string amongst an array of
// strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]

// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]

// Output: ""

// Explanation: There is no common prefix among the input strings.

// Note:
// All given inputs are in lowercase letters a-z

// let fun = (arr) => {
//   let finale;
//   let arr1 = [];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       arr1.push(arr[i][j]);
//     }
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//       if (arr1[i] === arr1[j]) {
//         arr2.push(arr1[i]);
//       }
//     }
//   }
//   if (arr2.length < 2) {
//     finale = '""';
//   } else {
//     finale = [...new Set(arr2)];
//   }

//   return finale;
// };
// console.log(fun(["flower", "flow", "flight"]));

//----------------------------------------
var arr = [
  { name: "nikunj", std: 10, per: 90 },
  { name: "nik", std: 11, per: 60 },
  { name: "nikhil", std: 9, per: 95 },
  { name: "neel", std: 10, per: 45 },
];

// function getHighPercentageStudent(students) {
//   let highPercentageStudent = students[0];
//   for (let i = 1; i < students.length; i++) {
//       if (students[i].per > highPercentageStudent.per) {
//           highPercentageStudent = students[i];
//       }
//   }
//   return highPercentageStudent;
// }

// let highPercentageStudent = getHighPercentageStudent(arr);
// console.log(highPercentageStudent);

// let fun = (arr) => {
//   let arr1 = [];
//   for (let i = 0; i < arr.length; i++) {
//     let a = arr[i].per;
//     arr1.push(a);
//   }
//   let abc = arr1.sort();

//   console.log(abc[abc.length - 1]);
// };
// fun([
//   { name: "nikunj", std: 10, per: 90 },
//   { name: "nik", std: 11, per: 60 },
//   { name: "nikhil", std: 9, per: 95 },
//   { name: "neel", std: 10, per: 45 },
// ]);
