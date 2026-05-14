// Task 20: Password strength checker
//
// With else if, we don't need to repeat previous conditions —
// if we reach the second branch, we already know length >= 6.

const password = "Hello1!";
const len = password.length;  // 7
let strength;

if (len < 6) {
  strength = "Weak";
} else if (len < 10) {     // implicit: len >= 6 here
  strength = "Medium";
} else {
  strength = "Strong";
}

console.log(strength);  // Medium
