// Task 2: Fix the broken variable declarations
//
// Errors in the original code:
//   1. const 1firstName  → variable names can't START with a number
//   2. let my-age        → variable names can't contain hyphens (- is the minus operator)
//   3. const score = 0; score = 100;  → can't reassign a const, must use let
//   4. let let = "bad"   → 'let' is a reserved keyword, can't be used as a variable name

const firstName = "Sara";
let myAge = 22;
let score = 0;
score = 100;          // OK now because score is declared with let
let option = "bad";   // renamed from 'let' to a valid name

console.log(firstName, myAge, score, option);
