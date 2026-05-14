// Task 8: Operator precedence — predict the output
//
// Precedence order: **  →  * / %  →  + -  →  comparisons  →  &&  →  ||

console.log(2 + 3 * 4);              // 14   → 3*4=12, then 2+12
console.log((2 + 3) * 4);            // 20   → parentheses force +: 5*4
console.log(2 ** 3 * 2);             // 16   → 2**3=8, then 8*2
console.log(10 % 3 + 1);             // 2    → 10%3=1, then 1+1
console.log(5 + 3 > 7 && 4 !== 5);   // true → 8>7 is true, 4!==5 is true, true && true
