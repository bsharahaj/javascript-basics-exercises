// Task 6: Swap two variables WITHOUT a third variable

let a = 5;
let b = 10;

// Method: array destructuring (modern, clean)
[a, b] = [b, a];

console.log(`a = ${a}, b = ${b}`);  // a = 10, b = 5


// ---- Alternative method using arithmetic (no third variable, no destructuring) ----
//
// let a = 5;
// let b = 10;
// a = a + b;   // a = 15
// b = a - b;   // b = 15 - 10 = 5
// a = a - b;   // a = 15 - 5 = 10
