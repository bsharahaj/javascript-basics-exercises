// Task 27: Prime numbers up to 50
//
// A prime number is only divisible by 1 and itself.
// For each n from 2 to 50, check if any number from 2 to n-1 divides it.
// If we find one, it's NOT prime — break out early.

for (let n = 2; n <= 50; n++) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;  // no need to keep checking
    }
  }

  if (isPrime) {
    console.log(n);
  }
}
// Output: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
