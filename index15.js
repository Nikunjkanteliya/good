//How can you double elements of an array using reduce?
// Please note that you cannot create additional variables.

// let fun = (arr) => {
//   arr.reduce((prev, next) => {
//    prev = next * 2;
//      arr.push(prev)
//   },1);

//   return arr
// };

// console.log(fun([1, 2, 3, 4]));

//-----------------------------------------------------------------------

//How could you print unique values from an array?

// let fun = (arr) => {
//   let unique = arr.filter((ele, index) => {
//     return arr.indexOf(ele) === index;
//   });
//  return unique
// };
//  console.log(fun([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));

//Given an array of arrays (ie. a multidimensional array), each containing only numeric values, order these arrays by the sum of the elements within.

// EXAMPLE:

// Input= [[1, 3], [4, 2], [2, 1]]

// Output= [[2, 1], [1, 3], [4, 2]]

// let arr = [[1, 3], [4, 2], [2, 1]]

// let inputArray = [[1, 3], [4, 2], [2, 1]];

// inputArray.sort((a, b) => {
//   let sumA = a.reduce((acc, val) => acc + val, 0);
//   let sumB = b.reduce((acc, val) => acc + val, 0);
//   return sumA - sumB;
// });

// console.log(inputArray); // [[2, 1], [1, 3], [4, 2]]

  console.log(10+10)