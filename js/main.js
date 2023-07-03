'use strict';

//  let num = -124;
//  let x = 100 + (num *= 5);
// 100 + (-124 *= 5) = 100 + (-620) = -520;
let num = -124;
let x = 100 + (num *= 5);
console.log(x);


// 1) "" + 15 + 5;
//    0  + 15 + 5 = 155;
let sum = "" + 15 + 5;
console.log(sum);

// 2) "" - 10 + 5;
//    0  - 10 + 5 = -5;

let sum_2 = "" - 10 + 5;
console.log(sum_2);

// 3) false + true;
//     0    + 1 = 1;
let sum_3 = false + true;
console.log(sum_3);

// 4) 69 / "3";
//    69 /  3 = 23;
let sum_4 = 69 / "3";
console.log(sum_4);

// 5) "10" * "20";
//     10  *  20 = 200;
let sum_5 = "10" * "20";
console.log(sum_5);

// 6) 12+ 10 + "px"
//    12 + 10 + 1 = 23;    
let sum_6 = 12 + 10 + "px";
console.log(sum_6);










