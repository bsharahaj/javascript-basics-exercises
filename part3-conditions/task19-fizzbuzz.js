// Task 19: FizzBuzz — the classic
//
// ORDER MATTERS! Check the most specific condition first
// (divisible by both 3 AND 5) before checking the more general ones.

const n = 15;

if (n % 3 === 0 && n % 5 === 0) {
  console.log("FizzBuzz");
} else if (n % 3 === 0) {
  console.log("Fizz");
} else if (n % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(n);
}
// Output: FizzBuzz
