// Task 12: Compound assignment operators
//
// Compound operators are shortcuts:
//   x = x + 5   →  x += 5
//   x = x * 2   →  x *= 2
//   x = x - 3   →  x -= 3
//   x = x ** 2  →  x **= 2
//   x = x % 7   →  x %= 7

let x = 10;

x += 5;    // was: x = x + 5     →  x is now 15
x *= 2;    // was: x = x * 2     →  x is now 30
x -= 3;    // was: x = x - 3     →  x is now 27
x **= 2;   // was: x = x ** 2    →  x is now 729
x %= 7;    // was: x = x % 7     →  x is now 729 % 7 = 1

console.log(x);  // 1
