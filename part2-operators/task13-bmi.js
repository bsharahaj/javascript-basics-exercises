// Task 13: BMI calculator
// Formula: BMI = weight / (height ** 2)
// .toFixed(1) rounds to 1 decimal place (returns a STRING)

const weight = 70;    // kg
const height = 1.75;  // meters

const bmi = weight / (height ** 2);

console.log(`BMI: ${bmi.toFixed(1)}`);
// Output: BMI: 22.9
