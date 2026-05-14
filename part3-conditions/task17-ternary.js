// Task 17: Rewrite if/else as ternary
// Pattern: condition ? valueIfTrue : valueIfFalse

// 1
const msg = 10 > 5 ? "yes" : "no";

// 2 — assuming isMember exists
const isMember = true;
const fee = isMember ? 5 : 20;

// 3 — assuming score exists
const score = 75;
const label = score >= 50 ? "pass" : "fail";

console.log(msg, fee, label);  // yes 5 pass
