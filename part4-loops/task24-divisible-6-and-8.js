// Task 24: First number divisible by both 6 and 8 — using a while loop
//
// !(n % 6 === 0 && n % 8 === 0) means: keep looping as long as n is NOT
// divisible by both 6 and 8.

let n = 1;

while (!(n % 6 === 0 && n % 8 === 0)) {
  n++;
}

console.log(n);  // 24
