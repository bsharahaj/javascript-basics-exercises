// Task 26: Countdown until zero — do...while
//
// do...while runs the body FIRST, then checks the condition.
// Useful when you want at least one iteration.

let rockets = 5;
let output = "";

do {
  output += `${rockets}... `;
  rockets--;
} while (rockets > 0);

output += "Blast off!";
console.log(output);
// Output: 5... 4... 3... 2... 1... Blast off!
