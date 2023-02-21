// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5

// Output: [-7,-1,1,3,4]

// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

// Example 2:

// Input: n = 3

// Output: [-1,0,1]

// Example 3:

// Input: n = 1

// Output: [0]

// Constraints:

// 1 <= n <= 1000

// let fun = (n) =>{
//     let arr = []
//     arr.length = n
//     for (let i=0;i<n;i++) {

//         arr[i] = i*2-n+1
//         console.log(n);
//     }
//     return arr
// }
// console.log(fun (2));

//-------------------------------------------------------------------------
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

// Given the integer n, return the number of complete rows of the staircase you will build.

// Example 1:

// ![image](image.png)

// Input: n = 5

// Output: 2

// Explanation: Because the 3rd row is incomplete, we return 2.

// Example 2:

// ![image](image_2.png)

// Input: n = 8

// Output: 3

// Explanation: Because the 4th row is incomplete, we return 3.

// Constraints:

// 1 <= n <= 231 - 1

// let fun = (coin) => {

//    if (coin<0) {
//     return
//    }
//    else {
//  let row  = Math.round(coin/2)-1
//     return row
//    }

// }
// console.log(fun (10));

// let fun = (coin) => {
//   for (let i = 1; i <= coin; i++) {

//   coin = coin - 1

//   }
//   return coin
// };
// console.log(fun(5));

//---------------------------grid---------------------------------------------

// let xyz =  (grid) => {
//     let value = []
//     let grid1 = grid.flat()

//     console.log(grid1)

//     for (let i=0;i<grid1.length;i++) {

//         for (let j=i+1;j<grid1.length;j++) {

//             if (grid1[i]*grid1[j]===0) {
//                    value.push(0)
//             }
//             else if (grid1[i]*grid1[j]===1) {

//                 value.push(4)
//             }
//         }
//     }
// return value
// }
//  console.log(xyz([[1,0]]));

