// From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

// let fun = (arr) => {
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     }
//   }
//   return even.reduce((prev, next) => {
//     return prev + next;
//   }, 0);
// };
// console.log(fun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//-----------------------------------------
// Starting with an array containing the numbers 1 through 10, use filter, map, and reduce to produce the following.

// Use console.log to display the results.
// * An array of odd numbers.
// * An array of numbers divisible by 2 or 5.
// * An array of numbers divisible by 3 and then squared those numbers.
// * The sum of the following: square the numbers divisible by 5.

// let fun = (arr) => {
//   let odd = arr.filter((ele) => {
//     return ele % 2 !== 0;
//   });

//   let dby2 = arr.filter((ele) => {
//     return ele % 2 === 0 || ele % 5 === 0;
//   });

//   let dby3 = arr.filter((ele) => {
//     return ele % 3 === 0;
//   });
//   let square = dby3.map((ele) => {
//     return ele * ele;
//   });

//   let sum = arr.filter((ele) => {
//     return ele % 5 === 0;
//   });
//   let finalesum = sum.reduce((prev, next) => {
//     return prev + next;
//   }, 0);
// };
// fun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//---------------------------------------------------------------------------------------
// Return only unique values

// In this JavaScript array exercise, the supplied array may contain duplicate values.

// Write a function to return only unique values — values that only occur exactly one time within the provided array.

let fun = (arr) => {
  //  let remove = [...new Set(arr)]
  //     console.log (remove)

  let remove = arr.filter((ele, index) => {
    return arr.indexOf(ele) === index;
  });
  console.log(remove);
};

fun([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
